import { Injectable } from '@angular/core';
import { Question } from 'src/models/questionnaire.model';

import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class ImageSingleAnswerService {
  constructor(private qService: QuestionService) {}

  setAnswers(answerId: number, question: Question) {
    question = this.qService.setAllAnswersToFalse(question);
    question = this.qService.setChosenAnswerToTrue(answerId, question);
    return question;
  }

  setImgsStyles(question: Question) {
    const arr = this.qService.setStylesForImgAnswers([question]);
    return arr[0];
  }
}
