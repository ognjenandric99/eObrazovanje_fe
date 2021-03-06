import { KorisnikState } from 'src/state/KorisnikState';
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
    korisnik: new KorisnikState()
  }
};
