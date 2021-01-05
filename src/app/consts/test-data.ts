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
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        question_text: 'Каков Ваш пол?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'женщины',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/female-boxer.jpg',
            answer_img_alt: 'женщины',
          },
          {
            answer_id: 1,
            answer_text: 'мужчины',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/male-boxer.jpg',
            answer_img_alt: 'мужчины',
          },
        ],
      },
      {
        question_id: 2,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text: 'К какой возрастной группе Вы относитесь?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'до 20 лет',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'до 30 лет',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'до 40 лет',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'до 50 лет',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'до 60 лет и старше',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 3,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text: 'Каков Ваш стаж занятий физкультурой/спортом?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'до 3 лет',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'до 5 лет',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'до 7 лет',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'до 10 лет и выше',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 4,
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        question_text:
          'Какому типу физических нагрузок Вы отдаёте наибольшее предпочтение?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Силовые нагрузки',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/activity-pumping.jpg',
            answer_img_alt: 'Силовые нагрузки',
          },
          {
            answer_id: 1,
            answer_text: 'Аэробные нагрузки',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/activity-running.jpg',
            answer_img_alt: 'Аэробные нагрузки',
          },
        ],
      },
      {
        question_id: 5,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text: 'Пользуетесь ли Вы услугами персонального тренера?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Да, постоянно',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Да, когда необходим',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Да, когда есть деньги',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Хочу, но дорого',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'Нет, нет необходимости',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 6,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text:
          'Какую сумму Вы тратите ежемесячно на биологически активные добавки (витамины, минералы, Омега 3 и т.д.)',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'до 20 рублей',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'до 50 рублей',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'до 70 рублей',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'до 100 рублей и выше',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'Не покупаю ничего такого',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 7,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text:
          'Сказывается ли Ваша работа/хобби на здоровье Вашего позвоночника/суставов?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Да, сказывается очень сильно',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Да, сказывается умренно',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Практически не сказывается',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 8,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text:
          'Какую сумму Вам приходится тратить ежемесячно на решение проблем со здоровьем?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'до 20 рублей',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'до 50 рублей',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'до 70 рублей',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'до 100 рублей и выше',
            answer_boolean_reply: false,
          },
          {
            answer_id: 4,
            answer_text: 'На это не трачусь',
            answer_boolean_reply: false,
          },
        ],
      },

      {
        question_id: 9,
        question_type: QuestionType.SPECIAL_IMAGE_MULTI_ANSWER,
        question_text:
          'В каких частях позвоночника Вы испытываете проблемы (выберите один ответ или несколько; зелёный цвет - проблем нет)?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Нет проблем',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/spine-healthy.jpg',
            answer_img_alt: 'Здоровая спина',
          },
          {
            answer_id: 1,
            answer_text: 'Поясничный отдел',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/spine-lowerback.jpg',
            answer_img_alt: 'Поясничный отдел',
          },
          {
            answer_id: 2,
            answer_text: 'Грудной отдел',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/spine-chest.jpg',
            answer_img_alt: 'Грудной отдел',
          },
          {
            answer_id: 3,
            answer_text: 'Шейный отдел',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/spine-neck.jpg',
            answer_img_alt: 'Шейный отдел',
          },
        ],
      },

      {
        question_id: 10,
        question_type: QuestionType.SPECIAL_IMAGE_MULTI_ANSWER,
        question_text:
          'Проблемы в каких суставах Вас сейчас беспокоят (выберите один ответ или несколько; зелёный цвет - это не беспокоит)?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Ничего из этого не беспокоит',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/joints-all-good.jpg',
            answer_img_alt: 'Ничего из этого не беспокоит',
          },
          {
            answer_id: 1,
            answer_text: 'Локтевые суставы',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/joints-elbows.jpg',
            answer_img_alt: 'Локтевые суставы',
          },
          {
            answer_id: 2,
            answer_text: 'Коленные суставы',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/joints-knees.jpg',
            answer_img_alt: 'Коленные суставы',
          },
          {
            answer_id: 3,
            answer_text: 'Плечевые суставы',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/joints-shoulders.jpg',
            answer_img_alt: 'Плечевые суставы',
          },
        ],
      },
      {
        question_id: 11,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text: 'Как часто Вас беспокоят боли в позвоночнике/суставах?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Постоянно что-то болит',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Болит время от времени',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Болит после больших нагрузок',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Ничего не беспокоит',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 12,
        question_type: QuestionType.RATING_ANSWER,
        question_text:
          'Как бы Вы оценили эффективность помощи специалистов по вопросам здоровья (врачи, массажисты и т.д.), исходя из Вашего личного опыта и опыта Ваших знакомых?',
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
        question_id: 13,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text:
          'Знаете ли Вы какие-либо упражнения для профилактики заболеваний позвоночника ( грыжи/протрузии и т.д.)?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Да, постоянно пользуюсь ими',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Да, делаю их, когда необходимо',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Да, но нет нужды их делать',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Не знал(а), что такое есть',
            answer_boolean_reply: false,
          },
        ],
      },
      {
        question_id: 14,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text:
          'Смогли бы Вы рассказать другому человеку о роли питания в поддержании здорового позвоночника и суставов?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Да, я много об этом знаю',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Да, кое-что мне известно',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Не уверен(а)',
            answer_boolean_reply: false,
          },
        ],
      },

      {
        question_id: 15,
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        question_text:
          'Хотели бы Вы включить в Ваш комплекс упражнения на специальных тренажёрах для профилактики заболеваний суставов и позвоночника?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Да, обязательно',
            answer_boolean_reply: false,
          },
          {
            answer_id: 1,
            answer_text: 'Да, если время позволит',
            answer_boolean_reply: false,
          },
          {
            answer_id: 2,
            answer_text: 'Нет, мне это не надо',
            answer_boolean_reply: false,
          },
          {
            answer_id: 3,
            answer_text: 'Сперва хочу узнать об этом больше',
            answer_boolean_reply: false,
          },
        ],
      },

      {
        question_id: 16,
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        question_text:
          'Хотели бы Вы, чтобы в Вашем спортклубе работал тренер, разбирающийся в вопросах восстановления суставов и позвоночника?',
        question_answers: [
          {
            answer_id: 0,
            answer_text: 'Мне всё равно',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/dont-care.jpg',
            answer_img_alt: 'Мне всё равно',
          },
          {
            answer_id: 1,
            answer_text: 'Да',
            answer_boolean_reply: false,
            answer_img_url: './assets/images/yes1.jpg',
            answer_img_alt: 'Да',
          },
        ],
      },

      {
        question_id: 17,
        question_type: QuestionType.TEXT,
        question_text: 'Что бы Вы хотели добавить от себя?',
        question_text_answer: '',
      },
    ],
  };
  return obj;
}

export function getTestQuestionnaireId() {
  return 'd0819d57-e5d9-44f0-ab42-af03b231aefe';
}
