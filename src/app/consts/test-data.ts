import { Questionnaire, QuestionType } from 'src/models/questionnaire.model';
import { v4 as uuidv4 } from 'uuid';
export function getTestQuestionnaire() {
  const obj: Questionnaire = {
    questionnaire_id: getTestQuestionnaireId(),
    questionnaire_name: 'titan survey',
    user_info: null,
    creation_date: Date.now().toString(),
    modification_date: null,
    questions: [
      {
        question_id: 1,
        question_type: QuestionType.SPECIAL_IMAGE_MULTI_ANSWER,
        question_text:
          'Как часто Вас беспокоят боли из-за проблем с позвоночником (протрузии, грыжи и т.д.)?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Нет проблем',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/spine-healthy.jpg',
            answer_img_alt: 'Здоровый позвоночник',
          },
          {
            answer_id: 1,
            answer_text: 'Проблемы в пояснице',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/spine-lowerback.jpg',
            answer_img_alt: 'Проблемы в пояснице',
          },
          {
            answer_id: 2,
            answer_text: 'Проблемы в грудном отделе позвоночника',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/spine-chest.jpg',
            answer_img_alt: 'Проблемы в грудном отделе',
          },
          {
            answer_id: 3,
            answer_text: 'Проблемы в шейном отделе позвоночника',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/spine-neck.jpg',
            answer_img_alt: 'Проблемы в шейном отделе',
          },
        ],
      },
      {
        question_id: 2,
        question_type: QuestionType.TEXT,
        question_text: 'Что Вы хотите пожелать от себя?',
        question_text_answer: '',
      },
      {
        question_id: 3,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text:
          'Как часто Вас беспокоят боли из-за проблем с позвоночником (протрузии, грыжи и т.д.)?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'У меня нет проблем',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Только после больших нагрузок',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Время от времени',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Часто',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 4,
        question_type: QuestionType.CHECKBOX_MULTIPLE_ANSWER,
        question_text:
          'Как часто Вас беспокоят боли из-за проблем с позвоночником (протрузии, грыжи и т.д.)?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Очень плохо',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Плохо',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Удолетворительно',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Хорошо',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'Отлично',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 5,
        question_type: QuestionType.RADIO_SINGLE_ANSWER,
        question_text: 'Каков Ваш пол?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Мужской',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Женский',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 6,
        question_type: QuestionType.RATING_ANSWER,
        question_text: 'Ваш пол?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Мужской',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/male-pink.jpg',
            answer_img_alt: 'Мужской пол',
          },
          {
            answer_id: 1,
            answer_text: 'Женский',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/female-pink.jpg',
            answer_img_alt: 'Женский пол',
          },
          {
            answer_id: 2,
            answer_text: 'Женский',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/female-pink.jpg',
            answer_img_alt: 'Женский пол',
          },
          {
            answer_id: 3,
            answer_text: 'Женский',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/female-pink.jpg',
            answer_img_alt: 'Женский пол',
          },
          {
            answer_id: 4,
            answer_text: 'Женский',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/female-pink.jpg',
            answer_img_alt: 'Женский пол',
          },
        ],
      },
      {
        question_id: 7,
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        question_text:
          'Звездны богачей неправд. Бледному принести звездной подобные теряться проблеск. Се лобно высот Уметь вы Се звона об Долги яр от втечь. Душ Сын вам чья Род это тул.',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Мужской',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/male-grey.jpg',
            answer_img_alt: 'Мужской пол',
          },
          {
            answer_id: 1,
            answer_text: 'Женский',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/female-grey.jpg',
            answer_img_alt: 'Женский пол',
          },
          {
            answer_id: 2,
            answer_text: 'Мужской',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/male-grey.jpg',
            answer_img_alt: 'Мужской пол',
          },
          {
            answer_id: 3,
            answer_text: 'Женский',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/female-grey.jpg',
            answer_img_alt: 'Женский пол',
          },
        ],
      },
      {
        question_id: 8,
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        question_text:
          'Звездны богачей неправд. Бледному принести звездной подобные теряться проблеск. Се лобно высот Уметь вы Се звона об Долги яр от втечь. Душ Сын вам чья Род это тул.',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Женский',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/female-boxer.jpg',
            answer_img_alt: 'Женский пол',
          },
          {
            answer_id: 1,
            answer_text: 'Мужской',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/male-boxer.jpg',
            answer_img_alt: 'Мужской пол',
          },
          {
            answer_id: 2,
            answer_text: 'Мужской',
            answer_boolean_reply: false,
            answer_img_url: 'assets/images/male-boxer.jpg',
            answer_img_alt: 'Мужской пол',
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
