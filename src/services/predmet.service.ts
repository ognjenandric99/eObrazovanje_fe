import { axiosClient } from "src/clients/axiosClient";
import { environment } from "src/environments/environment";
import { Predmet } from "src/models/Predmet";
import { User } from "src/models/User";

type updatePredmetResponse = {
  updated: boolean,
  message: string
}
export type getStudentiResponse = {
  id: number,
  brIndeksa: string,
  korisnikDTO: User
}[]
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

  static async getStudenti(predmetId: number): Promise<getStudentiResponse>{
    try{
      const userRequest = await axiosClient({
        method: 'get',
        url: `${environment.backendUrl}/studenti/izvodjenjePredmeta/${predmetId}`
      });
      return userRequest.data;
    } catch (e : any) {
      console.error(e);
      return []
    }
  }

  static async izbaciStudentaSaPredmeta(studentId: number, predmetId: number): Promise<boolean>{
    try{
      await axiosClient({
        method: 'delete',
        url: `${environment.backendUrl}/pohadjanje-predmeta/studenti/${studentId}/izvodjenje-predmeta/${predmetId}`
      });
      return true;
    } catch(e) {
      return false;
    }
  }
}
