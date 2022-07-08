import { axiosClient } from "src/clients/axiosClient";
import { environment } from "src/environments/environment";
import {IzvodjenjeIspita} from "../models/IzvodjenjeIspita";
import {User} from "../models/User";
import {Ispit} from "../models/Ispit";
import {StudentskiNalog} from "../models/StudentskiNalog";

export class StudentskiNalogService {

  static async getFinansije() : Promise<StudentskiNalog>{
    const userRequest = await axiosClient({
        method: 'get',
        url: `${environment.backendUrl}/studentski-nalog`,
    });
    return userRequest.data;
  }
}
