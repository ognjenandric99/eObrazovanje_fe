import { UserState } from 'src/state/UserState';

export const environment = {
  production: false,
  backendUrl: '<HOSTNAME>/api/',
  states: {
    user: new UserState()
  }
};