import { TokenState } from 'src/state/TokenState';
import { UserState } from 'src/state/UserState';

export const environment = {
  production: false,
  backendUrl: 'http://localhost:8080/api',
  states: {
    token: new TokenState(),
    user: new UserState()
  }
};
