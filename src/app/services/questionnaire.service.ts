import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap, switchMap, shareReplay } from 'rxjs/operators';
import {
  UPLOAD_TEST_QUESTIONNAIRE,
  GET_TEST_QUESTIONNAIRE,
  GET_QUESTIONNAIRE_BY_QID,
  QID,
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

  firstQuestionUrl = '';
  questionnaire$ = this.getQuestionnaireByQid(QID());

  private getQuestionnaireByQid(qid: string): Observable<Questionnaire> {
    return this.http.get<Questionnaire>(GET_QUESTIONNAIRE_BY_QID(qid)).pipe(
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
          q = this.qService.setPreviousQuestionUrl(q, questionnaire.questions);
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
      tap((questionnaire) => {
        this.isLoadingService.remove();
        this.firstQuestionUrl = questionnaire.first_question_url;
      }),
      shareReplay(1),
      catchError((error) => this.slackService.errorHandling(error))
    );
  }

  updateInternally(question: Question) {
    //const questionnaire = this.getQuestionnaireSubj();
    //const index = question.question_id - 1;
    //questionnaire.questions[index] = question;
    //console.log('updated questionnaire ', //questionnaire);
    ///this.setQuestionnaireSubj(questionnaire);
  }

  uploadQuestionnaire() {
    const testQuestionnaire = getTestQuestionnaire();
    this.http
      .post<Questionnaire>(UPLOAD_TEST_QUESTIONNAIRE(), testQuestionnaire)
      .pipe(catchError((error) => this.slackService.errorHandling(error)))
      .subscribe(console.log);
  }
}
