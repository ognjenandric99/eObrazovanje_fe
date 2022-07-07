type subscribeCallback = (activePredmetId: number | null) => void;

export class PredmetState {
    activePredmetId: number | null;
    private subscribed: subscribeCallback[];
    constructor(){
        this.activePredmetId = null;
        this.subscribed = [];
    }

    subscribe(callback: subscribeCallback) {
        this.subscribed.push(callback);
        callback(this.activePredmetId);
    }

    getValue(){
        return this.activePredmetId;
    }

    updateValue(value: number | null) {
        this.activePredmetId = value;
        this.subscribed.forEach(callback => callback(value));
    }
}
