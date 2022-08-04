class Car {
  constructor() {
    this.color = 'white';
    this.wheels = 4
  }
}

class Bike {
  constructor() {
    this.color = 'black';
    this.wheels = 2
  }
}

class TransportFactoryMethod {
  static createNewTransport(type) {
    switch(type) {
      case 'Car':
        return new Car;
      case 'Bike':
        return new Bike;
    }
  }
}

const bike = TransportFactoryMethod.createNewTransport('Bike');
const car = TransportFactoryMethod.createNewTransport('Car');

console.log(bike);
console.log(car);
