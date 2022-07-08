import { IzvodjenjePredmeta } from './IzvodjenjePredmeta';

export type IzvodjenjeIspita = {
  id: number;
  izvodjenje: IzvodjenjePredmeta; // izvodjenje predmeta
  datum: object;
  ispitniRok: string;
  ucionica: string;
  status: string;
};
