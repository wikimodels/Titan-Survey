import { Injectable } from '@angular/core';
import { Question } from 'src/models/questionnaire.model';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class RadioSingleAnswerService {
  constructor(private qService: QuestionService) {}

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
