class Strategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  doSomeLogic() {
    const result = this.strategy.doAlgorithm(['a', 'c', 'd', 'b','e']);

    console.log(result.join(','));
  }
}

class CreateFirstStrategy extends Strategy {
  doAlgorithm(array) {
    return array.sort();
  }
}

class CreateSecondStrategy extends Strategy {
  doAlgorithm(array) {
    return array.reverse();
  }
}

const strategy = new Strategy(new CreateFirstStrategy());
strategy.doSomeLogic();

strategy.setStrategy(new CreateSecondStrategy());
strategy.doSomeLogic();
