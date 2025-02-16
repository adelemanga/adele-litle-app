export type Food = {
  id: string;
  code: string;
  name: string;
  emoji: string;
  description: string;
  imgUrl: string;
  continent: string;
};

export type Advice = {
  id: string;
  name: string;
  lastname: string;
  message: string;
  rating: number;
  title: string;
};

export interface NewFoodFormValues {
  name: string;
  imgUrl: string;
}
