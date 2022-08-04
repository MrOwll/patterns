export class Observer {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter(subscriber => subscriber !== listener)
  }

  updateValue(value) {
    this.listeners.forEach(listener => listener(value))
  }
}
