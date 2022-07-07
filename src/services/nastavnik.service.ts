import { axiosClient } from "src/clients/axiosClient";
import { environment } from "src/environments/environment";
import { Predmet } from "src/models/Predmet";

export class NastavnikService{

  static async getPredmeti() : Promise<Predmet[]>{
    const userRequest = await axiosClient({
        method: 'get',
        url: `${environment.backendUrl}/predmeti`,
    });
    return userRequest.data;
  }
}
