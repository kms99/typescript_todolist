import { EIsDone } from './enum';

export type TTodo = {
  id: number;
  title: string;
  contents: string;
  isDone: EIsDone;
};
