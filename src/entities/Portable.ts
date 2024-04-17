export interface JustifyChoice {
  id: number | null;
  idJustifyChoiceByQuestion: number | null;
  title: string;
  score: number;
  deleted?: boolean;
}

export interface Choice {
  id: number | string;
  idQuestionChoice?: number;
  title: string;
  score: number;
  JustifyChoice: JustifyChoice | null;
  deleted?: boolean;
}

export interface Question {
  id: number | null;
  title?: string;
  position?: number | null;
  text?: string;
  idchoice?: number[];
  deleted?: boolean;
}

export interface QuestionObject {
  question: Question;
  choices: { choice: Choice; justifyChoice?: JustifyChoice }[];
  edit?: boolean;
  deleted?: boolean;
  new?: boolean;
}

export interface ResponseCreate {
  id: number;
}

export interface Course {
  id: number;
  name: string;
  image: string;
  questions: QuestionObject[];
  edit?: boolean;
  deleted?: boolean;
  new?: boolean;
}

export type RequisitionPortableResponseType = {
  text: string;
  code: 200;
};
