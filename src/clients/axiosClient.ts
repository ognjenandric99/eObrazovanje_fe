import axios, {AxiosRequestConfig} from 'axios';
import { environment } from 'src/environments/environment';

let token: string | null;

environment.states.token.subscribe((newToken) => {
  token = newToken;
})

export const axiosClient = (config?: AxiosRequestConfig) => axios({
  ...config,
  headers: {
    ...config?.headers,
    "Access-Control-Allow-Origin" : "*",
    Authorization: token?`Bearer ${token}` : false
  }
});
