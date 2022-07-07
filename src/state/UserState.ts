import { User } from 'src/models/User';

type subscribeCallback = (user: User | null) => void;

const getInitialUser = () : User | null => {
    const localValue = localStorage.getItem('user');
    if(!localValue) return null;
    try {
        return JSON.parse(localValue)
    } catch {
        return null;
    }
}

export class UserState {
    user: User | null;
    private subscribed: subscribeCallback[];
    constructor(){
        this.user = getInitialUser();
        this.subscribed = [];
    }

    subscribe(callback: subscribeCallback) {
        this.subscribed.push(callback);
        callback(this.user);
    }

    getValue(){
        return this.user;
    }

    updateValue(value: User | null) {
        this.user = value;
        value? localStorage.setItem('user', JSON.stringify(value)) : localStorage.removeItem('user');
        this.subscribed.forEach(callback => callback(value));
    }
}
