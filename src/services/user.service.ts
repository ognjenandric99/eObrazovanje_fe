export type UserServiceLoginResponse = {
    status: boolean,
    user: Record<string, any>
}
export class UserService{
    static async login(username: string, password: string) : Promise<UserServiceLoginResponse>{
        if(!username || !password) throw 'You need to enter both credentials.';
        return {
            status: true,
            user: {
                username
            }
        }
    }
}