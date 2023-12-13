type numOrStr = {
  number?: number;
  string: string;
};

class Animal {
  constructor(public name: numOrStr, private age: number) {}

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance} meter`);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  protected sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

// THIS IS INHERITANCE
class Cat extends Animal {
  meow() {
    console.log(`${this.name} is meowing`);
  }

  // THIS IS POLYMORPHISM
  eat() {
    console.log(`${this.name} is eating fish`);
  }

  isSleeping() {
    this.sleep();
  }
}

const cat = new Cat(
  {
    number: 1,
    string: "Nemo",
  },
  10
);
// cat.move(10);
// cat.meow();
cat.eat();
cat.name;
// cat.isSleeping();

/*

type aaaa = {
  string: string;
};
}

*/

class Fish extends Animal {
  color: string;

  constructor(color: string, name: Omit<numOrStr, "number">, age: number) {
    super(name, age);
    this.color = color;
  }

  swim(distance: number = 0) {
    this.name;
    console.log(`${this.name} is swimming ${distance} meter`);
  }
}

class Shark extends Fish {
  constructor(color: string, name: numOrStr, age: number) {
    super(color, name, age);
  }

  eat() {
    console.log(`${this.name} is eating fish`);
  }
}

// const fish = new Fish("Gold", "Nemo", 10);

// fish.move(10);
// console.log(fish.color);
