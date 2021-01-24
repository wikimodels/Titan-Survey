import { Injectable } from '@angular/core';
import { Question, QuestionType } from 'src/models/questionnaire.model';
import { COMPLETION } from 'src/app/consts/routes.consts';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  setAllAnswersToFalse(question: Question) {
    question.question_answers.forEach(
      (answer) => (answer.answer_boolean_reply = false)
    );
    return question;
  }

  setChosenAnswerToTrue(answerId: number, question: Question) {
    question.question_answers[answerId].answer_boolean_reply = true;
    return question;
  }

  setChosenMultiAnswer(answerId: number, question: Question) {
    const currentValue =
      question.question_answers[answerId].answer_boolean_reply;
    question.question_answers[answerId].answer_boolean_reply =
      currentValue === true ? false : true;
    return question;
  }

  setSpecialChosenMultiAnswer(answerId: number, question: Question) {
    if (answerId === 0) {
      question = this.setAllAnswersToFalse(question);
      question = this.setChosenMultiAnswer(answerId, question);
      return question;
    } else {
      question.question_answers[0].answer_boolean_reply = false;
      question = this.setChosenMultiAnswer(answerId, question);
    }
    return question;
  }

  setNextQuestionUrl(question: Question, questions: Question[]): Question {
    let url: string;

    const nextQuestionId = question.question_id + 1;
    if (nextQuestionId <= question.questions_total_number) {
      const nextQuestion = questions.find(
        (q) => q.question_id === nextQuestionId
      );
      url =
        this.getUrlBase(nextQuestion.question_type) +
        '/' +
        nextQuestion.question_id;
    } else {
      url = COMPLETION;
    }
    question.next_question_url = url;
    return question;
  }

  setPreviousQuestionUrl(question: Question, questions: Question[]): Question {
    let url: string = '';
    if (question.question_id === 1) {
      url =
        this.getUrlBase(question.question_type) + '/' + question.question_id;
      question.previous_question_url = url;
      return question;
    } else {
      const previousQuestion = questions.find(
        (q) => q.question_id === question.question_id - 1
      );
      url =
        this.getUrlBase(previousQuestion.question_type) +
        '/' +
        previousQuestion.question_id;
      question.previous_question_url = url;
    }
    return question;
  }

  getFirstQuestionUrl(question) {
    let url = this.getUrlBase(question.question_type) + '/1';
    return url;
  }

  setStylesForImgAnswers(questions: Question[]) {
    questions.forEach((q) => {
      if (
        q.question_type === QuestionType.IMAGE_SINGLE_ANSWER ||
        q.question_type === QuestionType.IMAGE_MULTI_ANSWER ||
        q.question_type === QuestionType.SPECIAL_IMAGE_MULTI_ANSWER ||
        q.question_type === QuestionType.BUTTON_SINGLE_ANSWER ||
        q.question_type === QuestionType.BUTTON_MULTI_ANSWER
      ) {
        q.question_answers.forEach((a) => {
          a.answer_clicked_style =
            a.answer_boolean_reply === false ? 'initial' : 'clicked';
        });
      }
    });
    return questions;
  }

  private getUrlBase(type) {
    let url = '';
    switch (type) {
      case QuestionType.RADIO_SINGLE_ANSWER:
        url = QuestionType.RADIO_SINGLE_ANSWER;
        break;
      case QuestionType.BUTTON_SINGLE_ANSWER:
        url = QuestionType.BUTTON_SINGLE_ANSWER;
        break;
      case QuestionType.CHECKBOX_MULTIPLE_ANSWER:
        url = QuestionType.CHECKBOX_MULTIPLE_ANSWER;
        break;
      case QuestionType.TEXT:
        url = QuestionType.TEXT;
        break;
      case QuestionType.RATING_ANSWER:
        url = QuestionType.RATING_ANSWER;
        break;
      case QuestionType.IMAGE_SINGLE_ANSWER:
        url = QuestionType.IMAGE_SINGLE_ANSWER;
        break;
      case QuestionType.IMAGE_MULTI_ANSWER:
        url = QuestionType.IMAGE_MULTI_ANSWER;
        break;
      case QuestionType.SPECIAL_IMAGE_MULTI_ANSWER:
        url = QuestionType.SPECIAL_IMAGE_MULTI_ANSWER;
        break;
    }
    return url;
  }
}
