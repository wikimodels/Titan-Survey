import {
  ChartType,
  Questionnaire,
  QuestionType,
} from 'src/models/questionnaire.model';
import { v4 as uuidv4 } from 'uuid';
import { QID } from './urls.consts';
export function getTestQuestionnaire() {
  const obj: Questionnaire = {
    questionnaire_id: QID(),
    user_info: {
      country: '',
      countryCode: '',
      city: '',
      deviceType: '',
      os: '',
      os_version: '',
      lat: 0,
      lon: 0,
      location: {
        type: 'Point',
        coordinates: [0, 0],
      },
      flagUrl: '',
      ip: '',
    },
    respondents: {
      respondents_header: 'Данные о респондентах',
      respondents_subheader: 'Геолокация, устройства входа и т.д.',
      respondents_charts: [
        {
          id: 'a720d4e9-f5ef-465c-8127-3835d7cb597c',
          type: ChartType.STANDART,
          ngClass: ChartType.STANDART,
        },
        {
          id: '35524fb5-da63-462c-a005-0bdf22404357',
          type: ChartType.STANDART,
          ngClass: ChartType.STANDART,
        },
        {
          id: '58d7f552-95e0-4131-9804-7f3646f95508',
          type: ChartType.STANDART,
          ngClass: ChartType.STANDART,
        },
        {
          id: '91055dae-6c9f-4a4d-b2f4-d86b1e67fc8a',
          type: ChartType.STANDART,
          ngClass: ChartType.STANDART,
        },
        {
          id: '014963e6-a416-4d5c-a045-70eeee471be5',
          type: ChartType.MAP,
          ngClass: ChartType.MAP,
        },
      ],
    },
    questions: [
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_img_alt: 'женщины',
            answer_img_url: './assets/images/female-boxer.jpg',
            answer_text: 'женщины',
            answer_chart_text: 'Женщины',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_img_alt: 'мужчины',
            answer_img_url: './assets/images/male-boxer.jpg',
            answer_text: 'мужчины',
            answer_chart_text: 'Мужчины',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 1,
        question_text: 'Каков Ваш пол?',
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/2',
        previous_question_url: 'image-single-answer/1',
        question_charts: [
          {
            id: '10578d98-04ac-4965-b27d-33868b9c36d3',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'bac00933-1a23-4ff4-a7c7-4f59cd7b24e9',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },

      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'до 20 лет',
            answer_chart_text: '0<20 лет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'до 30 лет',
            answer_chart_text: '20<30 лет',
            answer_clicked_style: 'clicked',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'до 40 лет',
            answer_chart_text: '30<40 лет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'до 50 лет',
            answer_chart_text: '40<50 лет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 4,
            answer_text: 'до 60 лет и старше',
            answer_chart_text: '50+ лет',
            answer_clicked_style: 'initial',
          },
        ],
        question_id: 2,
        question_text: 'К какой возрастной группе Вы относитесь?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/3',
        previous_question_url: 'image-single-answer/1',
        question_charts: [
          {
            id: '3b32f86a-55ad-4d39-913f-363ac4337755',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '69124452-b2ec-49e2-979f-13b4ecb3543a',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'd7909860-b09e-4ce7-a592-7fa182882a0c',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },

      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'до 3 лет',
            answer_chart_text: '0<3 лет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'до 5 лет',
            answer_chart_text: '3<5 лет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'до 7 лет',
            answer_chart_text: '5<7 лет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'до 10 лет и выше',
            answer_chart_text: '7+ лет',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 3,
        question_text: 'Каков Ваш стаж занятий физкультурой/спортом?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'image-single-answer/4',
        previous_question_url: 'button-single-answer/2',
        question_charts: [
          {
            id: '8b4d33b8-0634-4e6e-81e0-304b8252e6ed',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'dd656359-7c81-449d-99c2-184754010fe7',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '83f5537f-377b-4aba-b9c6-f0dc6dbd1d7b',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_chart_text: 'Силовые',
            answer_img_alt: 'Силовые нагрузки',
            answer_img_url: './assets/images/activity-pumping.jpg',
            answer_text: 'Силовые',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_img_alt: 'Аэробные нагрузки',
            answer_img_url: './assets/images/activity-running.jpg',
            answer_text: 'Аэробные',
            answer_chart_text: 'Аэробные',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 4,
        question_text:
          'Какому типу физических нагрузок Вы отдаёте наибольшее предпочтение?',
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/5',
        previous_question_url: 'button-single-answer/3',
        question_charts: [
          {
            id: 'b73fc074-7d50-4307-9d3f-ccb9d7df7a69',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '5826cabe-fd04-4158-b363-a6706663a872',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '196c3d59-a6a6-4238-b254-bab6e07eca44',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '3ae0221c-423b-4362-9c3d-8a797d5e6b3f',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Да, постоянно',
            answer_chart_text: 'Постоянно',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'Да, когда необходим',
            answer_chart_text: 'Когда необходим',

            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Да, когда есть деньги',
            answer_chart_text: 'Если есть деньги',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'Хочу, но дорого',
            answer_chart_text: 'Хочу, но дорого',
            answer_clicked_style: 'clicked',
          },
          {
            answer_boolean_reply: false,
            answer_id: 4,
            answer_text: 'Нет, нет необходимости',
            answer_chart_text: 'Мне не нужен',
            answer_clicked_style: 'initial',
          },
        ],
        question_id: 5,
        question_text: 'Пользуетесь ли Вы услугами персонального тренера?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/6',
        previous_question_url: 'image-single-answer/4',
        question_charts: [
          {
            id: '67a8b035-3d96-4716-864d-aa46f77f9d03',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'f7474baa-fc6c-45e4-8e9b-7556f6d48e8e',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '093f5d86-8fa6-4eac-b553-fa540730abb3',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'до 20 рублей',
            answer_chart_text: '0<20 руб.',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'до 50 рублей',
            answer_chart_text: '20<50 руб.',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'до 70 рублей',
            answer_chart_text: '50<70 руб.',

            answer_clicked_style: 'clicked',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_chart_text: '70+ руб.',
            answer_text: 'до 100 рублей и выше',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 4,
            answer_text: 'Не трачусь на это',
            answer_chart_text: 'Не трачусь на это',
            answer_clicked_style: 'initial',
          },
        ],
        question_id: 6,
        question_text:
          'Какую сумму Вы тратите ежемесячно на биологически активные добавки (витамины, минералы, Омега 3 и т.д.)',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/7',
        previous_question_url: 'button-single-answer/5',
        question_charts: [
          {
            id: '6326abe5-8940-4d7a-85f9-b75bf3ded19f',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'd9442a36-f7e4-4204-9bed-15a39cbaa051',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'ec84fe82-a9a5-4683-9f93-2724d3f2542c',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Да, сказывается очень сильно',
            answer_chart_text: 'Очень сильно',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_chart_text: 'Умеренно',
            answer_text: 'Да, сказывается умренно',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Практически не сказывается',
            answer_chart_text: 'Чуть-чуть',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 7,
        question_text:
          'Сказывается ли Ваша работа/хобби на здоровье Вашего позвоночника/суставов?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/8',
        previous_question_url: 'button-single-answer/6',
        question_charts: [
          {
            id: 'f1c8edc9-9533-475c-a7eb-8669bf72eb1c',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '7c0070b6-53e2-4870-9f26-ea73e8b23657',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'f87a0e8c-b540-4fbe-ad38-262af75ff5a6',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'до 20 рублей',
            answer_chart_text: '0<20 руб.',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'до 50 рублей',
            answer_chart_text: '20<50 руб.',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'до 70 рублей',
            answer_chart_text: '50<70 руб.',

            answer_clicked_style: 'clicked',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_chart_text: '70+ руб.',
            answer_text: 'до 100 рублей и выше',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 4,
            answer_text: 'Не трачусь на это',
            answer_chart_text: 'Не трачусь',
            answer_clicked_style: 'initial',
          },
        ],
        question_id: 8,
        question_text:
          'Какую сумму Вы тратите ежемесячно на лечение "болячек" (лекарства, физиотерапия и т.д.)?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'special-image-multi-answer/9',
        previous_question_url: 'button-single-answer/7',
        question_charts: [
          {
            id: '0d2ac3df-70a2-47cb-963d-71da54f443cc',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '83e3c4ec-70cc-495c-bb61-105069400f4e',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '5e93f390-0195-4915-a3c5-224e2a441f43',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_img_alt: 'Здоровая спина',
            answer_img_url: './assets/images/spine-healthy.jpg',
            answer_text: 'Нет проблем',
            answer_chart_text: 'Нет проблем',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_img_alt: 'Поясничный отдел',
            answer_img_url: './assets/images/spine-lowerback.jpg',
            answer_text: 'Поясничный отдел',
            answer_chart_text: 'Поясничный',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_img_alt: 'Грудной отдел',
            answer_img_url: './assets/images/spine-chest.jpg',
            answer_text: 'Грудной отдел',
            answer_chart_text: 'Грудной',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_img_alt: 'Шейный отдел',
            answer_img_url: './assets/images/spine-neck.jpg',
            answer_text: 'Шейный отдел',
            answer_chart_text: 'Шейный',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 9,
        question_text:
          'В каких отделах позвоночника Вы испытываете проблемы (выберите один или несколько ответов; зелёный цвет - проблем нет)?',
        question_type: QuestionType.SPECIAL_IMAGE_MULTI_ANSWER,
        questions_total_number: 19,
        next_question_url: 'special-image-multi-answer/10',
        previous_question_url: 'button-single-answer/8',
        question_charts: [
          {
            id: 'dbb9918e-336d-4a99-bff8-eb8aa956799f',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'c7abd7e7-a499-4fcd-ad89-29f6f006e059',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '3db7ce3b-3b54-4123-9803-51ceab6a0827',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '975ce323-c796-41d5-9811-97cbc17e3ace',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_img_alt: 'Ничего из этого не беспокоит',
            answer_img_url: './assets/images/joints-all-good.jpg',
            answer_text: 'Ничего из этого не беспокоит',
            answer_chart_text: 'Всё хорошо',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_img_alt: 'Локтевые суставы',
            answer_img_url: './assets/images/joints-elbows.jpg',
            answer_text: 'Локтевые суставы',
            answer_chart_text: 'Локти',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_img_alt: 'Коленные суставы',
            answer_img_url: './assets/images/joints-knees.jpg',
            answer_text: 'Коленные суставы',
            answer_chart_text: 'Колени',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_img_alt: 'Плечевые суставы',
            answer_img_url: './assets/images/joints-shoulders.jpg',
            answer_text: 'Плечевые суставы',
            answer_chart_text: 'Плечи',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 10,
        question_text:
          'Проблемы в каких суставах Вас обычно беспокоят (выберите один или несколько ответов; зелёный цвет - не беспокоит)?',
        question_type: QuestionType.SPECIAL_IMAGE_MULTI_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/11',
        previous_question_url: 'special-image-multi-answer/9',
        question_charts: [
          {
            id: 'bbb6e8dc-74af-4a6d-b712-fadd83701f58',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'f88fbb8d-1e87-4973-9a1e-643e052d3808',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'eb22bd46-c9b7-4db3-8c2a-9637770f0f66',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '4088d6bf-2461-438f-9c04-c8c53561e638',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Постоянно что-то болит',
            answer_chart_text: 'Постоянно',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'Болит время от времени',
            answer_chart_text: 'Время от времени',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Болит после разных нагрузок',
            answer_chart_text: 'После нагрузок',

            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'Ничего не беспокоит',
            answer_chart_text: 'Всё хорошо',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 11,
        question_text: 'Как часто Вас беспокоят боли в позвоночнике/суставах?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'rating-answer/12',
        previous_question_url: 'special-image-multi-answer/10',
        question_charts: [
          {
            id: '7ab31edf-024c-4adb-a80b-2141e8ea69b2',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '48058aae-6d05-4402-a347-af47e57aaec3',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '02f28bb2-b940-4c1b-a9b7-8a4983e08f53',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '5973a224-2d7b-4662-ac01-33e29fd92264',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Очень плохо',
            answer_value: 1,
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'Плохо',
            answer_value: 2,
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Удолетворительно',
            answer_value: 3,
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'Хорошо',
            answer_value: 4,
          },
          {
            answer_boolean_reply: false,
            answer_id: 4,
            answer_text: 'Отлично',
            answer_value: 5,
          },
        ],
        question_id: 12,
        question_text:
          'Как Вы оцениваете эффективность помощи специалистов по вопросам здоровья (врачи, массажисты и т.д.), исходя из Вашего личного опыта и опыта Ваших знакомых?',
        question_type: QuestionType.RATING_ANSWER,
        questions_total_number: 19,
        next_question_url: 'special-image-multi-answer/13',
        previous_question_url: 'button-single-answer/11',
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_img_alt: 'Не обращаю на это внимания',
            answer_img_url: './assets/images/spine-ok.jpg',
            answer_text: 'Не обращаю не это внимания',
            answer_chart_text: 'Не замечал(а)',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_img_alt: 'Сколиоз',
            answer_img_url: './assets/images/spine-scoliosis.jpg',
            answer_text: 'Сколиоз',
            answer_chart_text: 'Сколиоз',
            answer_clicked_style: 'clicked',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_img_alt: 'Кифоз',
            answer_img_url: './assets/images/spine-kyphosis.jpg',
            answer_text: 'Кифоз',
            answer_chart_text: 'Кифоз',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_img_alt: 'Лордоз',
            answer_img_url: './assets/images/spine-lordosis.jpg',
            answer_text: 'Лордоз',
            answer_chart_text: 'Лордоз',
            answer_clicked_style: 'initial',
          },
        ],
        question_id: 13,
        question_text:
          'Какие виды искривления осанки Вы видите у окружающих, особенно, у подростков (выберете один или несколько ответов)?',
        question_type: QuestionType.SPECIAL_IMAGE_MULTI_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/14',
        previous_question_url: 'rating-answer/12',
        question_charts: [
          {
            id: '600e7694-4eb4-4a14-b8d3-69e0aaa2c89e',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'b500150e-5b01-4c35-b54c-349a278cb6e5',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Да, постоянно пользуюсь ими',
            answer_chart_text: 'Знаю и всегда делаю',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'Да, делаю их, когда необходимо',
            answer_chart_text: 'Знаю и иногда делаю',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Да, но нет нужды их делать',
            answer_chart_text: 'Знаю, но не делаю',
            answer_clicked_style: 'clicked',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'Не знал(а), что такое есть',
            answer_chart_text: 'Впервые слышу',
            answer_clicked_style: 'initial',
          },
        ],
        question_id: 14,
        question_text:
          'Знаете ли Вы какие-либо упражнения для профилактики заболеваний позвоночника (грыжи/протрузии и т.д.)?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/15',
        previous_question_url: 'special-image-multi-answer/13',
        question_charts: [
          {
            id: '198c29f4-d184-450f-bc80-d52413082cfd',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'ec3d0730-f7a9-4627-ab18-1ab2c6674de3',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'b4bed736-c2d5-4988-b1d9-f29e98b4ba59',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Отлично в этом разбираюсь',
            answer_chart_text: 'Экспрет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'Хорошо понимаю эту тему',
            answer_chart_text: 'Знаю и много',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Кое-что мне известно',
            answer_chart_text: 'Знаю кое-что',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'Мало разбираюсь в этом',
            answer_chart_text: 'Ничего не знаю',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 15,
        question_text:
          'Смогли бы Вы рассказать другому человеку о роли питания в поддержании здоровья позвоночника и суставов?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'button-single-answer/16',
        previous_question_url: 'button-single-answer/14',
        question_charts: [
          {
            id: '134509f3-74f2-493d-aafe-5cc089428a37',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'fff89a11-f6a6-4be5-96bb-b8160848a4a8',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '3b5aa14d-acb1-4524-b1ac-63954eeb0811',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Да, обязательно',
            answer_chart_text: 'Обязательно',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'Да, если время позволит',
            answer_chart_text: 'Если будет время',
            answer_clicked_style: 'clicked',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Нет, мне это не надо',
            answer_chart_text: 'Нет',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'Хочу узнать об этом больше',
            answer_chart_text: 'Хочу знать больше',
            answer_clicked_style: 'initial',
          },
        ],
        question_id: 16,
        question_text:
          'Хотели бы Вы включить в Ваш комплекс упражнения на специальных тренажёрах для профилактики заболеваний суставов и позвоночника?',
        question_type: QuestionType.BUTTON_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'checkbox-multiple-answer/17',
        previous_question_url: 'button-single-answer/15',
        question_charts: [
          {
            id: 'abdf0faf-34fd-42d3-825d-36aa9eb06b0f',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '2dcb4830-705a-4c08-b89a-de226418a507',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '1def8981-0455-4dd5-8c55-011b632cc199',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },
      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_text: 'Bозможность для медитации',
            answer_chart_text: 'Bсё для медитации',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_text: 'Успокаивающая музыка',
            answer_chart_text: 'Успокаивающая музыка',
          },
          {
            answer_boolean_reply: false,
            answer_id: 2,
            answer_text: 'Ароматерапия',
            answer_chart_text: 'Ароматерапия',
          },
          {
            answer_boolean_reply: false,
            answer_id: 3,
            answer_text: 'Целебные чаи',
            answer_chart_text: 'Целебные чаи',
          },
          {
            answer_boolean_reply: false,
            answer_id: 4,
            answer_text: 'другое (напишу в заключении)',
            answer_chart_text: 'Другое',
          },
        ],
        question_id: 17,
        question_text:
          'Что должно быть, на Ваш взгляд, в комнате лечебной физкультуры помимо специализированных тренажёров?',
        question_type: QuestionType.CHECKBOX_MULTIPLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'image-single-answer/18',
        previous_question_url: 'button-single-answer/16',
        question_charts: [
          {
            id: '5cfc7e46-72c5-4902-ac27-ee4fa6031111',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '90f6e156-6628-4f1b-aaac-9ae1b7b43742',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '194945f8-e5af-41be-9397-cae153ebeadd',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },

      {
        question_answers: [
          {
            answer_boolean_reply: false,
            answer_id: 0,
            answer_img_alt: 'Мне всё равно',
            answer_img_url: './assets/images/dont-care.jpg',
            answer_text: 'Мне всё равно',
            answer_chart_text: 'Всё равно',
            answer_clicked_style: 'initial',
          },
          {
            answer_boolean_reply: false,
            answer_id: 1,
            answer_img_alt: 'Да',
            answer_img_url: './assets/images/yes1.jpg',
            answer_text: 'Да',
            answer_chart_text: 'Да',
            answer_clicked_style: 'clicked',
          },
        ],
        question_id: 18,
        question_text:
          'Хотели бы Вы, чтобы в Вашем спортклубе работал тренер, разбирающийся в вопросах восстановления суставов и позвоночника?',
        question_type: QuestionType.IMAGE_SINGLE_ANSWER,
        questions_total_number: 19,
        next_question_url: 'text-answer/19',
        previous_question_url: 'checkbox-multiple-answer/17',
        question_charts: [
          {
            id: '595febe4-6500-4f75-9374-4efb1042c252',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: 'b33ebbee-f26b-40e3-b3ea-78342346e26d',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
          {
            id: '538e21b3-a99f-47b4-95ec-cfdfcda4fba4',
            type: ChartType.STANDART,
            ngClass: ChartType.STANDART,
          },
        ],
      },

      {
        question_id: 19,
        question_text: 'Что бы Вы хотели пожелать/добавить от себя?',
        question_text_answer: '',
        question_type: QuestionType.TEXT,
        questions_total_number: 19,
        next_question_url: 'completion',
        previous_question_url: 'image-single-answer/18',
      },
    ],
    creation_date: '1609982516838',
    modification_date: null,
  };
  return obj;
}

export function getTestQuestionnaireId() {
  return 'd0819d57-e5d9-44f0-ab42-af03b231aefe';
}
