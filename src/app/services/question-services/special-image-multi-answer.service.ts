import { Injectable } from '@angular/core';
import { Question } from 'src/models/questionnaire.model';

import { QuestionnaireAnswersService } from '../questionnaire-answers.service';
import { QuestionnaireService } from '../questionnaire.service';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class SpecialImageMultiAnswerService {
  constructor(private qService: QuestionService) {}

  setSpecialAnswers(answerId: number, question: Question) {
    question = this.qService.setSpecialChosenMultiAnswer(answerId, question);
    return question;
  }

  setImgsStyles(question: Question) {
    const arr = this.qService.setStylesForImgAnswers([question]);
    return arr[0];
  }
}
