import { axiosClient } from "src/clients/axiosClient";
import { environment } from "src/environments/environment";
import { User } from "src/models/User";

export class NastavnikService{
    static async getAll() : Promise<User[]>{
      try {
        const request = await axiosClient({
          method: 'get',
          url: `${environment.backendUrl}/korisnici/nastavnici`
      });
      return request.data;
      } catch(e){
        console.error(e);
        return [];
      }
    }
}
