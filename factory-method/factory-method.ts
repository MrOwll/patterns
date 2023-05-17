abstract class Delivery {
  abstract deliver(): void;
}

class AirDelivery extends Delivery {
  deliver(): void {
    console.log('Delivering by air');
  }
}

class GroundDelivery extends Delivery {
  deliver(): void {
    console.log('Delivering by ground');
  }
}

abstract class DeliveryFactory {
  abstract createDelivery(): Delivery;

  deliverProduct(): void {
    const delivery = this.createDelivery();
    delivery.deliver();
  }
}

class AirDeliveryFactory extends DeliveryFactory {
  createDelivery(): Delivery {
    return new AirDelivery();
  }
}

class GroundDeliveryFactory extends DeliveryFactory {
  createDelivery(): Delivery {
    return new GroundDelivery();
  }
}

const airDeliveryFactory: DeliveryFactory = new AirDeliveryFactory();
airDeliveryFactory.deliverProduct();

const groundDeliveryFactory: DeliveryFactory = new GroundDeliveryFactory();
groundDeliveryFactory.deliverProduct();