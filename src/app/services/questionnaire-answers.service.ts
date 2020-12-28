import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, from } from 'rxjs';
import { catchError, map, tap, finalize, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { GET_USER_INFO_BY_IP, IPIFY_IP } from '../consts/urls.consts';
import { UserInfo } from 'src/models/user-info.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { UserInfoService } from './user-info.service';

const formatDisplayDate = 'DD-MM-YY';
const formatDisplayTime = 'HH:mm';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireAnswersService {
  constructor() {}

  private _questionnaireAnswersSubj = new BehaviorSubject<Questionnaire>({
    user_info: null,
    questions: [],
    creation_date: null,
    modification_date: null,
    //questions_total_number: 0,
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
}
