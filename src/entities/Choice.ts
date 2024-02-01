import { JustifyChoiceType } from './JustifyChoice';

export type ChoiceType = {
  id: number;
  idQuestionChoice: number;
  title: string;
  score: number;
  JustifyChoice: number | JustifyChoiceType;
};
