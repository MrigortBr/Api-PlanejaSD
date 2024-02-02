import { ChoiceType } from './Choice';

export type QuestionType = {
  id: number;
  name: string;
  title: string;
  text: string;
  idchoice: number[] | ChoiceType[];
};

export type QuestionResponseType = {
  question: QuestionType;
  choices: string[];
  link?: string;
};

export type RequisitionQuestionsResponseType = {
  questions: QuestionResponseType[];
  code: 200;
};
