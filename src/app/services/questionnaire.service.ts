import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, from } from 'rxjs';
import { catchError, map, tap, finalize, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {
  UPLOAD_TEST_QUESTIONNAIRE,
  GET_TEST_QUESTIONNAIRE,
} from '../consts/urls.consts';
import { UserInfo } from 'src/models/user-info.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import {
  Question,
  Questionnaire,
  QuestionType,
} from 'src/models/questionnaire.model';
import { UserInfoService } from './user-info.service';
import { getTestQuestionnaire } from '../consts/test-data';
import {
  COMPLETION,
  IMAGE_ANSWER,
  MULTI_ANSWER,
  RATING_ANSWER,
  SINGLE_ANSWER,
} from '../consts/routes.consts';
const formatDisplayDate = 'DD-MM-YY';
const formatDisplayTime = 'HH:mm';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor(private http: HttpClient) {}

  private _questionnaireSubj = new BehaviorSubject<Questionnaire>({
    questionnaire_id: null,
    user_info: null,
    questions: [],
    creation_date: null,
    modification_date: null,
    questions_total_number: 0,
  });
  questionnaireSubj$ = this._questionnaireSubj.asObservable();

  getQuestionnaireSubj(): Questionnaire {
    return this._questionnaireSubj.getValue();
  }

  setQuestionnaireSubj(questionnaire: Questionnaire) {
    this._questionnaireSubj.next(questionnaire);
  }

  getTestQ() {
    const testQuestionnaire = getTestQuestionnaire();
    this.http
      .post<Questionnaire>(UPLOAD_TEST_QUESTIONNAIRE(), testQuestionnaire)
      .pipe(
        switchMap(() => this.http.get<Questionnaire>(GET_TEST_QUESTIONNAIRE())),
        map((q) => {
          q.questions_total_number = q.questions.length;
          return q;
        })
      )
      .subscribe((q: Questionnaire) => {
        this.setQuestionnaireSubj(q);
      });
  }

  getRouterForFirstQuestion() {
    const type = this.getQuestionnaireSubj().questions[0].question_type;
    let url = this.getUrlBase(type);
    return url + '/1';
  }

  getRouterForPreviousQuestion(question: Question) {
    let previousQuestion: Question;
    let url: string;

    const next_question_id =
      question.question_id != 1 ? question.question_id - 1 : 1;
    console.log('Previous Q-id', next_question_id);
    const questionnaire = this.getQuestionnaireSubj();

    previousQuestion = questionnaire.questions.find(
      (q) => q.question_id == next_question_id
    );

    console.log('NEXT Q', previousQuestion);
    url = `${this.getUrlBase(
      previousQuestion.question_type
    )}/${next_question_id}`;
    console.log('URL', url);
    return url;
  }

  getRouterForNextQuestion(question: Question) {
    let nextQuestion: Question;
    let url: string;
    const next_question_id = question.question_id + 1;
    console.log('NEXT Q-id', next_question_id);
    const questionnaire = this.getQuestionnaireSubj();
    console.log('Questionnaire', questionnaire);

    if (question.question_id < questionnaire.questions_total_number) {
      nextQuestion = questionnaire.questions.find(
        (q) => q.question_id == next_question_id
      );
      console.log('NEXT Q', nextQuestion);

      url = `${this.getUrlBase(
        nextQuestion.question_type
      )}/${next_question_id}`;
    } else {
      url = COMPLETION;
    }
    console.log('URL', url);
    return url;
  }

  getUrlBase(type) {
    let url = '';
    switch (type) {
      case QuestionType.SINGLE:
        url = SINGLE_ANSWER;
        break;
      case QuestionType.MULTIPLE:
        url = MULTI_ANSWER;
        break;
      case QuestionType.TEXT:
        url = SINGLE_ANSWER;
        break;
      case QuestionType.RATING:
        url = RATING_ANSWER;
        break;
      case QuestionType.IMAGE:
        url = IMAGE_ANSWER;
        break;
    }
    return url;
  }
}
