import { axiosClient } from 'src/clients/axiosClient';
import { environment } from 'src/environments/environment';
import { IzvodjenjeIspita } from 'src/models/IzvodjenjeIspita';
import { Ispit } from '../models/Ispit';

export class IspitService {
  static async getIspiti(): Promise<Ispit[]> {
    const userRequest = await axiosClient({
      method: 'get',
      url: `${environment.backendUrl}/ispiti/prijava`,
    });
    return userRequest.data;
  }

  static async getIspitiByNastavnik(): Promise<IzvodjenjeIspita[]> {
    const userRequest = await axiosClient({
      method: 'get',
      url: `${environment.backendUrl}/ispiti/ispiti-nastavnika`,
    });
    console.log(userRequest.data);
    return userRequest.data;
  }
}
