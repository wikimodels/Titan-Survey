import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SAVE_ANSWERS } from '../consts/urls.consts';
import { UserInfo } from 'src/models/user-info.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { SlackService } from './shared/slack.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireAnswersService {
  constructor(private http: HttpClient, private slackService: SlackService) {}

  private _questionnaireAnswersSubj = new BehaviorSubject<Questionnaire>({
    user_info: null,
    questions: [],
    creation_date: null,
    modification_date: null,
  });
  questionnaireAnswersSubj$ = this._questionnaireAnswersSubj.asObservable();

  getQuestionnaireSubj(): Questionnaire {
    return this._questionnaireAnswersSubj.getValue();
  }

  setQuestionnaireSubj(questionnaire: Questionnaire) {
    this._questionnaireAnswersSubj.next(questionnaire);
  }

  addUserInfo(userInfo: UserInfo) {
    const questionnaire = this.getQuestionnaireSubj();
    questionnaire.user_info = userInfo;
    this.setQuestionnaireSubj(questionnaire);
  }

  addAnsweredQuestion(question: Question) {
    const questionnaire = this.getQuestionnaireSubj();
    const index = questionnaire.questions.findIndex(
      (el) => el.question_id === question.question_id
    );
    if (index < 0) {
      questionnaire.questions.push(question);
    } else {
      questionnaire.questions[index] = question;
    }
    console.log(questionnaire);
    this.setQuestionnaireSubj(questionnaire);
  }

  saveAnswersToCloud() {
    const questionnaire = this.getQuestionnaireSubj();
    questionnaire.creation_date = Date.now().toString();
    console.log('Q to Cloud', questionnaire);
    this.http
      .post(SAVE_ANSWERS(), questionnaire)
      .pipe(catchError((error) => this.slackService.errorHandling(error)))
      .subscribe();
  }
}
