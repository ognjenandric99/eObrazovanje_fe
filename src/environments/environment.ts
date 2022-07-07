import { UserState } from 'src/state/UserState';

export const environment = {
  production: false,
  backendUrl: 'http://localhost:8080/api',
  states: {
    user: new UserState()
  }
};
