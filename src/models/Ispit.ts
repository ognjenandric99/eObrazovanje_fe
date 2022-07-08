import { Predmet } from './Predmet';

export type Ispit = {
  id: number;
  predispitniBodovi: number;
  finalniBodovi: number;
  predmet: Predmet;
  ocena: number;
  datum: object;
  status: string;
  ispitniRok: string;
  ucionica: string;
};
