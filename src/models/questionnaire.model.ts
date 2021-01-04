import { UserInfo } from './user-info.model';

export interface Questionnaire {
  questionnaire_id?: string;
  questionnaire_name?: string;
  user_info?: UserInfo;
  questions?: Question[];
  creation_date?: string;
  modification_date?: string;
  first_question_url?: string;
}

export interface Question {
  question_id: number;
  question_type: QuestionType;
  question_text: string;
  question_text_answer?: string;
  question_answers?: Answer[];
  ripple_color?: string;
  questions_total_number?: number;
  next_question_url?: string;
  previous_question_url?: string;
}

export interface Answer {
  answer_id: number;
  answer_text: string;
  answer_boolean_reply?: boolean;
  answer_text_reply?: boolean;
  answer_img_url?: string;
  answer_img_alt?: string;
  answer_clicked_style?: string;
}

export enum QuestionType {
  RADIO_SINGLE_ANSWER = 'radio-single-answer',
  BUTTON_SINGLE_ANSWER = 'button-single-answer',
  CHECKBOX_MULTIPLE_ANSWER = 'checkbox-multiple-answer',
  TEXT = 'text-answer',
  RATING_ANSWER = 'rating-answer',
  IMAGE_SINGLE_ANSWER = 'image-single-answer',
  IMAGE_MULTI_ANSWER = 'image-multi-answer',
  SPECIAL_IMAGE_MULTI_ANSWER = 'special-image-multi-answer',
  BUTTON_MULTI_ANSWER = 'button-mutli-answer',
}
