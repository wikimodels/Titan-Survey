import { Injectable } from '@angular/core';
import { Question } from 'src/models/questionnaire.model';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CheckboxMultiAnswerService {
  constructor() {}

  getFormControlsForAnswers(question: Question) {
    const formControls = {};
    question.question_answers.forEach((answer) => {
      formControls[answer['answer_id']] = new FormControl(
        answer.answer_boolean_reply
      );
    });
    console.log('forms', formControls);
    return formControls;
  }

  setAnswers(objectValues: any, question: Question) {
    const length = question.question_answers.length;
    for (let i = 0; i < length; i++) {
      question.question_answers[i].answer_boolean_reply = objectValues[i];
    }
    return question;
  }
}
