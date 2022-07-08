import { Ispit } from 'src/state/Ispit';
import { IzvodjenjeIspitaState } from 'src/state/IzvodjenjeIspitaState';
import { PredmetState } from 'src/state/PredmetState';
import { TokenState } from 'src/state/TokenState';
import { UserState } from 'src/state/UserState';

export const environment = {
  production: false,
  backendUrl: 'http://localhost:8080/api',
  states: {
    token: new TokenState(),
    user: new UserState(),
    predmet: new PredmetState(),
    izvodjenjeIspita: new IzvodjenjeIspitaState(),
    ispit: new Ispit()
  },
};
