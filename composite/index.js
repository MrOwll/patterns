class Component {
  constructor() {
    this.elements = [];
    this.traversed = [];
  }
}

class Leaf extends Component {
  constructor(value) {
    super();
    this.value = value;
  }

  getResult() {
    return this.value;
  }
}

class Composite extends Component {
  constructor(value) {
    super();
    this.value = value;
  }

  add(element) {
    this.elements.push(element);
  }

  getResult(result) {
    this.elements.forEach(element => {
      if (element instanceof Leaf) {
        result.push("Branch " + this.value + ", Leaf with '" + element.getResult() + "'");
      } else {
        if (this.traversed.indexOf(this) < 0) {
          result.push("Branch " + this.value);
        }

        this.traversed.push(this);
        element.getResult(result);
      }
    });
  }
}

const result = [];

const Box_1 = new Composite("Box_1");
const Box_2 = new Composite("Box_2");
const Box_3 = new Composite("Box_3");

const Item_1 = new Leaf("Item_1");
const Item_2 = new Leaf("Item_2");

Box_2.add(Item_2)
Box_1.add(Box_2);
Box_3.add(Item_1)
Box_1.add(Box_3);

Box_1.getResult(result);
console.log(result);
