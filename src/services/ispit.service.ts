import { axiosClient } from "src/clients/axiosClient";
import { environment } from "src/environments/environment";
import {IzvodjenjeIspita} from "../models/IzvodjenjeIspita";
import {User} from "../models/User";
import {Ispit} from "../models/Ispit";

export type prijavaIspitaResponse = {
  id: number
}[]

export class IspitService {

  static async getPrijavljeniIspiti() : Promise<Ispit[]>{
    const userRequest = await axiosClient({
      method: 'get',
      url: `${environment.backendUrl}/ispiti?status=PRIJAVLJEN`,
    });
    return userRequest.data;
  }

  static async getIzvodjenjaIspita() : Promise<IzvodjenjeIspita[]>{
    const userRequest = await axiosClient({
        method: 'get',
        url: `${environment.backendUrl}/ispiti/prijava`,
    });
    return userRequest.data;
  }

  static async prijavaIspita(izvodjenjeIspitaId: number, pohadjanjeId: number) : Promise<prijavaIspitaResponse>{
    const userRequest = await axiosClient({
      method: 'post',
      url: `${environment.backendUrl}/ispiti/${izvodjenjeIspitaId}/pohadjanje/${pohadjanjeId}`,
    });
    return userRequest.data;
  }
}
