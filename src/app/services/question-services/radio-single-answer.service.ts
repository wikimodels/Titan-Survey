import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, from } from 'rxjs';
import { catchError, map, tap, finalize, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {
  UPLOAD_TEST_QUESTIONNAIRE,
  GET_TEST_QUESTIONNAIRE,
} from '../../consts/urls.consts';
import { UserInfo } from 'src/models/user-info.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import {
  Question,
  Questionnaire,
  QuestionType,
} from 'src/models/questionnaire.model';
import { UserInfoService } from '../user-info.service';
import { getTestQuestionnaire } from '../../consts/test-data';

import { MessageType } from 'src/models/message-types.model';
import { QuestionnaireAnswersService } from '../questionnaire-answers.service';
import { QuestionnaireService } from '../questionnaire.service';
import { QuestionService } from './question.service';
const formatDisplayDate = 'DD-MM-YY';
const formatDisplayTime = 'HH:mm';

@Injectable({
  providedIn: 'root',
})
export class RadioSingleAnswerService {
  constructor(
    private questionnaireService: QuestionnaireService,
    private questionnaireAnsweredService: QuestionnaireAnswersService,
    private qService: QuestionService
  ) {}

  getAnswerId(question: Question) {
    if (
      question.question_answers.every((a) => a.answer_boolean_reply === false)
    ) {
      return -1;
    }
    const answer = question.question_answers.find(
      (a) => a.answer_boolean_reply === true
    );
    return answer.answer_id;
  }

  setAnswer(answerId: number, question: Question) {
    this.qService.setAllAnswersToFalse(question);
    question.question_answers[answerId].answer_boolean_reply = true;
    return question;
  }
}
