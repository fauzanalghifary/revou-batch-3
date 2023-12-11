// Type Inferrence -----------------------------

let firstName = "Fauzan";
// firstName = 3;

const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
// primeNumber.push("31");

let person = {
  name: "Fauzan",
  age: 88,
};
// person.address = "Jakarta";

type apiVersion = "v1" | "v2" | "v3";
const apiVersion: apiVersion = "v1";

const isPrime = (number: number) => {
  return number % 2 === 0;
};
// isPrime('a')

// Function Default and Optional Parameter -----------------------------

const sayHello = (name: string, age?: number) => {
  if (age) {
    return `Hello ${name}, you are ${age} years old!`;
  }

  return `Hello ${name}!`;
};
// sayHello("Fauzan", 88);

// Function Rest Parameter -----------------------------

const sum = (...numbers: number[]) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// sum(1, 2, 3, 4, 5);
