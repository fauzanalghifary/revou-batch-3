// Define an interface
interface TwoDimensionalShape {
  color: string;
  calculateArea(): number;
  calculateCircumference(): number;
}

// Implement the interface in a class
class CircleB implements TwoDimensionalShape {
  radius: number;

  constructor(radius: number, public color: string) {
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  calculateCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Implement the interface in another class
class SquareB implements TwoDimensionalShape {
  sideLength: number;

  constructor(sideLength: number, public color: string) {
    this.sideLength = sideLength;
    this.color = color;
  }

  calculateArea(): number {
    return this.sideLength ** 2;
  }

  calculateCircumference(): number {
    return 4 * this.sideLength;
  }
}

// Example usage
const circleZ = new CircleB(5, "red");
console.log("Circle Area:", circle.calculateArea());

const squareZ = new SquareB(4, "blue");
console.log("Square Area:", square.calculateArea());
