// PRIMITIVE DATA TYPES

const firstName = "Catur"; // string
const age = 22; // number
const height = 1.7; // number

// console.log(firstName + " is " + age + " years old.");
// console.log(`${firstName} is ${age} years old.`);

// console.log(typeof age === "number"); // true

const maxNum = Infinity; // number

const isMarried = false; // boolean

let foo; // undefined => unintentional
let bar = null; // null => intentional

// NON-PRIMITIVE DATA TYPES

// console.log(Number.isNaN(5 / 0)); // true); // true
// console.log(Number.isNaN(2)); // true
// console.log(Number("2"));

const primeNumbers = [2, 3, 5, 7, "11"]; // array
const coolNames = ["Catur", "Fauzan", "Rizky"]; // array
// console.log(coolNames[0]); // Catur
// console.log(coolNames[2]); // Rizky

const address = {
  street: "Bandung",
  city: "Bandung",
  country: null,
};

// console.log(address.country); // null
// console.log(address.province); // undefined
// console.log(address["street"]); // Jl. Raya Cipadung
// console.log(Object.keys(address).find((key) => address[key] === "Bandung"));
const isOddNumber = (number) => {
  return number % 2 === 1;
};

isOddNumber(3);
