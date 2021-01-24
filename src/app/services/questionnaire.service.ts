import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import {
  UPLOAD_TEST_QUESTIONNAIRE,
  GET_TEST_QUESTIONNAIRE,
  GET_QUESTIONNAIRE_BY_QID,
} from '../consts/urls.consts';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { getTestQuestionnaire } from '../consts/test-data';
import { QuestionService } from './question-services/question.service';
import { IsLoadingService } from '@service-work/is-loading';
import { SlackService } from './shared/slack.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor(
    private http: HttpClient,
    private qService: QuestionService,
    private isLoadingService: IsLoadingService,
    private slackService: SlackService
  ) {}

  private _questionnaireSubj = new BehaviorSubject<Questionnaire>({
    questionnaire_id: null,
    user_info: null,
    questions: [],
    creation_date: null,
    modification_date: null,
  });
  questionnaireSubj$ = this._questionnaireSubj.asObservable();

  getQuestionnaireSubj(): Questionnaire {
    return this._questionnaireSubj.getValue();
  }

  setQuestionnaireSubj(questionnaire: Questionnaire) {
    this._questionnaireSubj.next(questionnaire);
  }

  getQuestionnaireByQid(qid: string) {
    this.http
      .get<Questionnaire>(GET_QUESTIONNAIRE_BY_QID(qid))
      .pipe(
        tap(() => {
          this.isLoadingService.add();
        }),
        map((q: Questionnaire) => {
          const length = q.questions.length;
          q.questions.map((q) => (q.questions_total_number = length));
          return q;
        }),
        map((questionnaire: Questionnaire) => {
          questionnaire.questions.map((q) => {
            q = this.qService.setNextQuestionUrl(q, questionnaire.questions);
            return q;
          });
          return questionnaire;
        }),
        map((questionnaire: Questionnaire) => {
          questionnaire.questions.map((q) => {
            q = this.qService.setPreviousQuestionUrl(
              q,
              questionnaire.questions
            );
            return q;
          });
          return questionnaire;
        }),
        map((questionnaire: Questionnaire) => {
          questionnaire.first_question_url = this.qService.getFirstQuestionUrl(
            questionnaire.questions[0]
          );
          return questionnaire;
        }),
        map((questionnaire: Questionnaire) => {
          questionnaire.questions = this.qService.setStylesForImgAnswers(
            questionnaire.questions
          );
          return questionnaire;
        }),
        tap(() => {
          this.isLoadingService.remove();
        }),
        catchError((error) => this.slackService.errorHandling(error))
      )
      .subscribe((questionnaire: Questionnaire) => {
        console.log('Questionnaire from Cloud', questionnaire);
        this.setQuestionnaireSubj(questionnaire);
      });
  }

  updateInternally(question: Question) {
    const questionnaire = this.getQuestionnaireSubj();
    const index = question.question_id - 1;
    questionnaire.questions[index] = question;
    console.log('updated questionnaire ', questionnaire);
    this.setQuestionnaireSubj(questionnaire);
  }

  getQuestionnaire() {
    const testQuestionnaire = getTestQuestionnaire();
    this.http
      .post<Questionnaire>(UPLOAD_TEST_QUESTIONNAIRE(), testQuestionnaire)
      .pipe(
        switchMap(() => this.http.get<Questionnaire>(GET_TEST_QUESTIONNAIRE())),
        map((q: Questionnaire) => {
          const length = q.questions.length;
          q.questions.map((q) => (q.questions_total_number = length));
          return q;
        }),
        map((questionnaire: Questionnaire) => {
          questionnaire.questions.map((q) => {
            q = this.qService.setNextQuestionUrl(q, questionnaire.questions);
            return q;
          });
          return questionnaire;
        }),
        map((questionnaire: Questionnaire) => {
          questionnaire.questions.map((q) => {
            q = this.qService.setPreviousQuestionUrl(
              q,
              questionnaire.questions
            );
            return q;
          });
          return questionnaire;
        }),
        map((questionnaire: Questionnaire) => {
          questionnaire.questions = this.qService.setStylesForImgAnswers(
            questionnaire.questions
          );
          return questionnaire;
        })
      )
      .subscribe((questionnaire: Questionnaire) => {
        console.log('Questionnaire from Cloud', questionnaire);
        this.setQuestionnaireSubj(questionnaire);
      });
  }

  getFirstQuestionUrl() {
    return this.getQuestionnaireSubj().first_question_url;
  }
}
