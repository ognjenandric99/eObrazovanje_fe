import { Predmet } from './Predmet';

export type IzvodjenjePredmeta = {
  id: number;
  skolskaGodina: number;
  nastavniciPredmeta: object; // private List<NastavnikPredmeta> nastavniciPredmeta;
  predmet: Predmet;
};
