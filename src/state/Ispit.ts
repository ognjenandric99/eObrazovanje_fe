type subscribeCallback = (activeIzvodjenjeIspitaId: number | null) => void;

export class Ispit {
    activeIspitId: number | null;
  private subscribed: subscribeCallback[];
  constructor() {
    this.activeIspitId = null;
    this.subscribed = [];
  }

  subscribe(callback: subscribeCallback) {
    this.subscribed.push(callback);
    callback(this.activeIspitId);
  }

  getValue() {
    return this.activeIspitId;
  }
  updateValue(value: number | null) {
    this.activeIspitId = value;
    this.subscribed.forEach((callback) => callback(value));
  }
}
