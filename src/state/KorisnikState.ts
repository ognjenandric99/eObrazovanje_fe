import { User } from "src/models/User";

type subscribeCallback = (activeKorisnik: User | null) => void;

export class KorisnikState {
    activeKorisnik: User | null;
    private subscribed: subscribeCallback[];
    constructor(){
        this.activeKorisnik = null;
        this.subscribed = [];
    }

    subscribe(callback: subscribeCallback) {
        this.subscribed.push(callback);
        callback(this.activeKorisnik);
    }

    getValue(){
        return this.activeKorisnik;
    }

    updateValue(value: User | null) {
        this.activeKorisnik = value;
        this.subscribed.forEach(callback => callback(value));
    }
}
