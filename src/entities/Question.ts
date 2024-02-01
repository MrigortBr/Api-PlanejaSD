import { ChoiceType } from './Choice';

export type QuestionType = {
  id: number;
  name: string;
  title: string;
  text: string;
  idChoice: number[] | ChoiceType[];
};
