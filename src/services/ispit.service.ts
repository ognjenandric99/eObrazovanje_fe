import { axiosClient } from 'src/clients/axiosClient';
import { environment } from 'src/environments/environment';
import { IzvodjenjeIspita } from 'src/models/IzvodjenjeIspita';
import { User } from 'src/models/User';
import { Ispit } from 'src/state/Ispit';


export type getStudentiResponse = {
  id: number,
  brIndeksa: string,
  korisnikDTO: User
}[]

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

  static async getStudenti(ispitId: number): Promise<getStudentiResponse>{
    try{
      const userRequest = await axiosClient({
        method: 'get',
        url: `${environment.backendUrl}/ispiti/${ispitId}/studenti`
      });
      return userRequest.data;
    } catch (e : any) {
      console.error(e);
      return []
    }
  }

  
}
