// array destructuring
// const primeNum =
const [firstPrime, secondPrime, thirdPrime, fourPrime, ...restOfPrimes] = [
  1, 3, 5, 7, 11, 13, 17,
];
console.log(firstPrime); // 1
// console.log(`The first prime number is ${firstPrime}`); // The first prime number is 1

// object destructuring
const person = {
  name: "John",
  age: 21,
  address: "New York",
};

// console.log(person.name); // John

// const { name } = person;
// console.log(name); // John
