import { Injectable } from '@angular/core';
import { Question } from 'src/models/questionnaire.model';

@Injectable({
  providedIn: 'root',
})
export class RatingSingleAnswerService {
  constructor() {}

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
    question.question_answers[answerId - 1].answer_boolean_reply = true;
    return question;
  }
}
