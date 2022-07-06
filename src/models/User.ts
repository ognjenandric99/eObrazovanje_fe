export type User = {
    korisnickoIme: string,
    email: string,
    ime: string,
    prezime: string,
    adresa: string,
    id: number,
    jmbg: string,
    lozinka: string,
    pol: UserPol,
    tipKorisnika: UserType
}

export enum UserPol {
    MUSKI = "MUSKI",
    ZENSKI = "ZENSKI"
}
export enum UserType {
    STUDENT = "STUDENT"
}

export type UserServiceLoginResponse = {
    status: boolean,
    message: string,
    data?: User
}