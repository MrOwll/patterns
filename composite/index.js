class TreeComposite {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  add(element) {
    this.children.push(element);
  }

  remove(element) {
    const index = this.children.indexOf(element);

    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  operation() {
    console.log(`Composite ${this.name}`);

    for (const child of this.children) {
      child.operation();
    }
  }
}

class Leaf extends TreeComposite {
  constructor(name) {
    super(name);
  }

  operation() {
    console.log(`Leaf ${this.name}`);
  }
}

const leafA = new Leaf("A");
const leafB = new Leaf("B");
const leafC = new Leaf("C");
const leafD = new Leaf("D");

const composite1 = new TreeComposite("1");
const composite2 = new TreeComposite("2");

composite1.add(leafA);
composite2.add(leafB);
composite2.add(leafC);

composite1.add(composite2);

composite1.operation();
