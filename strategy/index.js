class SortingStrategy {
  sortArray(array) {
    return array;
  }
}

class CreateFirstStrategy extends SortingStrategy {
  sortArray(array) {
    return array.sort();
  }
}

class CreateSecondStrategy extends SortingStrategy {
  sortArray(array) {
    return array.reverse();
  }
}

class Strategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  doSomeLogic() {
    const result = this.strategy.sortArray(['a', 'c', 'd', 'b','e']);

    console.log(result.join(','));
  }
}

const strategy = new Strategy(new CreateFirstStrategy());
strategy.doSomeLogic();

strategy.setStrategy(new CreateSecondStrategy());
strategy.doSomeLogic();
