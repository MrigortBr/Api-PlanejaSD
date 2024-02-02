import { JustifyChoiceType } from './JustifyChoice';

export type ChoiceType = {
  id: number;
  idQuestionChoice: number;
  title: string;
  score: number;
  JustifyChoice: number | JustifyChoiceType;
};

export type ChoiceResponseType = {
  choice: ChoiceType;
  justifyChoice: string;
  link?: string;
};

export type RequisitionChoicesResponseType = {
  choice: ChoiceResponseType;
  code: 200;
};
