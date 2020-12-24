import { UserInfo } from './user-info.model';

export interface Questionnaire {
  questionnaire_id?: string;
  questionnaire_name?: string;
  user_info?: UserInfo;
  questions?: Question[];
  creation_date?: string;
  modification_date?: string;
  questions_total_number: number;
}

export interface Question {
  question_id: number;
  question_type: QuestionType;
  question_text: string;
  question_answers: Answer[];
}

export interface Answer {
  answer_id: number;
  answer_text: string;
  answer_boolean_reply?: boolean;
  answer_text_reply?: boolean;
}

export enum QuestionType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
  TEXT = 'text',
}
