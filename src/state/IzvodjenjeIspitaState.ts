type subscribeCallback = (activeIzvodjenjeIspitaId: number | null) => void;

export class IzvodjenjeIspitaState {
  activeIzvodjenjeIspitaId: number | null;
  private subscribed: subscribeCallback[];
  constructor() {
    this.activeIzvodjenjeIspitaId = null;
    this.subscribed = [];
  }

  subscribe(callback: subscribeCallback) {
    this.subscribed.push(callback);
    callback(this.activeIzvodjenjeIspitaId);
  }

  getValue() {
    return this.activeIzvodjenjeIspitaId;
  }
  updateValue(value: number | null) {
    this.activeIzvodjenjeIspitaId = value;
    this.subscribed.forEach((callback) => callback(value));
  }
}
