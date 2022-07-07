type subscribeCallback = (token: string | null) => void;

const getInitialToken = () : string | null => {
  return localStorage.getItem('token');
}

export class TokenState {
    token: string | null;
    private subscribed: subscribeCallback[];
    constructor(){
        this.token = getInitialToken();
        this.subscribed = [];
    }

    subscribe(callback: subscribeCallback) {
        this.subscribed.push(callback);
        callback(this.token);
    }

    getValue(){
        return this.token;
    }

    updateValue(value: string | null) {
        this.token = value;
        value? localStorage.setItem('token', value) : localStorage.removeItem('token');
        this.subscribed.forEach(callback => callback(value));
    }
}
