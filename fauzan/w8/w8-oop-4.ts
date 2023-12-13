// Abstract Class
abstract class Shape {
  abstract color: string; // Abstract property
  abstract calculateArea(): number; // Abstract method

  // Concrete method
  displayArea() {
    console.log(`Area: ${this.calculateArea()}`);
  }
}

abstract class Shape2 extends Shape {
  abstract height: number;
}

// const shape = new Shape(); // Error: Cannot create an instance of an abstract class.

class Circle extends Shape {
  constructor(private radius: number, public color: string) {
    super();
  }

  calculateArea(): number {
    console.log(this.color);
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(private sideLength: number, public color: string) {
    super();
  }

  calculateArea(): number {
    return this.sideLength ** 2;
  }
}

const circle = new Circle(5, "blue");
circle.displayArea(); // Outputs: Area: 78.53981633974483
circle.color; // Outputs: blue

const square = new Square(4, "red");
square.displayArea(); // Outputs: Area: 16
