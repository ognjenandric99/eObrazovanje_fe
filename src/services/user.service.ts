import { axiosClient } from 'src/clients/axiosClient';
import { environment } from 'src/environments/environment';
import { User, UserServiceLoginResponse, UserType } from 'src/models/User';

const getToken = async (username: string, password: string) : Promise<string> => {
    const tokenRequest = await axiosClient({
        method: 'post',
        url: `${environment.backendUrl}/korisnici/login`,
        headers: {},
        data: {
            korisnickoIme: username,
            lozinka: password
        }
    });
    environment.states.token.updateValue(tokenRequest.data);
    return tokenRequest.data as string
}

const loadUser = async (token: string) => {
    const userRequest = await axiosClient({
        method: 'get',
        url: `${environment.backendUrl}/korisnici`,
        headers: {
            Authorization : `Bearer ${token}`
        }
    });
    return userRequest.data;
}

export class UserService{
  static async login(username: string, password: string) : Promise<UserServiceLoginResponse>{
      if(!username || !password) throw 'You need to enter both credentials.';
      const token = await getToken(username, password);
      const user = await loadUser(token) as User;
      return {
          status: true,
          message: 'You logged in.',
          data: user
      }
  }

  static async update(user: User) : Promise<boolean>{
    try{
      await axiosClient({
          method: 'put',
          url: `${environment.backendUrl}/korisnici/${user.id}`,
          data: user
      });
      return true;
    } catch(e){
      console.error(e);
      return false;
    }
  }

  static async updateMe(newUserValues: User) : Promise<boolean>{
    try{
      await axiosClient({
          method: 'put',
          url: `${environment.backendUrl}/korisnici/`,
          data: newUserValues
      });
      return true;
    } catch(e){
      console.error(e);
      return false;
    }
  }
}
