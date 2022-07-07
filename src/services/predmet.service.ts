import { axiosClient } from "src/clients/axiosClient";
import { environment } from "src/environments/environment";
import { Predmet } from "src/models/Predmet";

type updatePredmetResponse = {
  updated: boolean,
  message: string
}
export class PredmetService {
  static async getPredmeti() : Promise<Predmet[]>{
    const userRequest = await axiosClient({
        method: 'get',
        url: `${environment.backendUrl}/predmeti`,
    });
    return userRequest.data;
  }

  static async getPredmet(id: number): Promise<Predmet> {
    const userRequest = await axiosClient({
      method: 'get',
      url: `${environment.backendUrl}/predmeti/${id}`
    });
    return userRequest.data;
  }


  static async updatePredmet(predmet: Predmet): Promise<updatePredmetResponse>{
    try{
      const userRequest = await axiosClient({
        method: 'put',
        url: `${environment.backendUrl}/predmeti/${predmet.id}`,
        data: {
          ...predmet
        }
      });
      return {
        updated: true,
        message: 'Predmet je azuriran.'
      }
    } catch (e : any) {
      return {
        updated: false,
        message: e?.statusText as string
      }
    }
  }
}
