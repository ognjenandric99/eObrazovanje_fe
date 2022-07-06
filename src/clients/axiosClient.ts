import axios, {AxiosRequestConfig} from 'axios';

export const axiosClient = (config?: AxiosRequestConfig) => axios(config || {});