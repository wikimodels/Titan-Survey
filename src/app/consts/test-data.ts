import { Questionnaire, QuestionType } from 'src/models/questionnaire.model';
import { v4 as uuidv4 } from 'uuid';
export function getTestQuestionnaire() {
  const obj: Questionnaire = {
    questionnaire_id: getTestQuestionnaireId(),
    questionnaire_name: 'titan survey',
    user_info: null,
    creation_date: Date.now().toString(),
    modification_date: null,
    questions_total_number: 3,
    questions: [
      {
        question_id: 1,
        question_type: QuestionType.SINGLE,
        question_text:
          'Как часто Вас беспокоят боли из-за проблем с позвоночником (протрузии, грыжи и т.д.)?',
        question_answers: [
          {
            answer_id: 1,
            answer_text: 'У меня нет проблем',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Только после больших нагрузок',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Время от времени',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'Часто',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 2,
        question_type: QuestionType.MULTIPLE,
        question_text:
          'Как часто Вас беспокоят боли из-за проблем с позвоночником (протрузии, грыжи и т.д.)?',
        question_answers: [
          {
            answer_id: 1,
            answer_text: 'У меня нет проблем',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Только после больших нагрузок',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Время от времени',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'Часто',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 3,
        question_type: QuestionType.SINGLE,
        question_text:
          'Как часто Вас беспокоят боли из-за проблем с позвоночником (протрузии, грыжи и т.д.)?',
        question_answers: [
          {
            answer_id: 1,
            answer_text: 'У меня нет проблем',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Только после больших нагрузок',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Время от времени',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'Часто',
            answer_boolean_reply: false,
          },
        ],
      },
    ],
  };
  return obj;
}

export function getTestQuestionnaireId() {
  return 'd0819d57-e5d9-44f0-ab42-af03b231aefe';
}
