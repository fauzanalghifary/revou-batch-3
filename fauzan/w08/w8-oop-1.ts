class Car {
  public name: string;
  protected brand: string;
  public color: string;
  private price: number;

  constructor(name: string, brand: string, color: string, price?: number) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.price = price || 1000;
  }

  start() {
    console.log(`${this.name} is starting...`);
    console.log(`Price: ${this.price}`);
  }

  stop() {
    console.log(`${this.name} is stopping...`);
  }

  honk() {
    console.log(`${this.name} is honking...`);
  }
}

const car1 = new Car("Camry", "Toyota", "Silver");
const car2 = new Car("Civic", "Honda", "Red", 2000);

car1.start();

// console.log(car1.price);
// console.log(car1.brand);

// --------------------------------------------------

class Car2 {
  constructor(
    public name: string,
    public brand: string,
    public color: string,
    private price: number
  ) {}

  start() {
    console.log(`${this.name} is starting...`);
  }

  stop() {
    console.log(`${this.name} is stopping...`);
  }

  honk() {
    console.log(`${this.name} is honking...`);
  }
}

const car3 = new Car2("Camry", "Toyota", "Silver", 1000);

// car3.start();
