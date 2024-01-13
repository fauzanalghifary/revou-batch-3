const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const primeNumbers = [2, 3, 5, 7, 11];

// // // newPrimeNumbers = primeNumbers.concat(13);
// primeNumbers.push(13);

// // console.log(primeNumbers);

// // // x.value = x.value.toLowerCase();

// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];

// // const filteredNumbers = numbers.filter((number) => number > 5);

// // console.log(filteredNumbers);

// const num = 2 * 3 + (4 * 5) / 2 - 1;

// // ternary operator

// const isOddNumber = (number = "invalid") => {
//   return number % 2 === 1;
// };

// isOddNumber();

// const isZero = (number) => {
//   return number === 0;
// };

// console.log(isOddNumber(3) ? "odd" : isZero(3) ? "zero" : "even");

// // null coalescing operator

// let firstName;
// let secondName = "Fauzan";

// console.log((firstName || secondName) ?? "Anonymous");

// console.log(firstName ?? secondName ?? "Anonymous");
// console.log("aku" ? "this is true" : "this is not true");

// // const a = { duration: 50 };

// // a.duration = a.duration ?? 10;

// const x = 1;
// let y = x ?? 2;

// z ??= 3;
// console.log(z);

// early return in function

// const isPrimeNumber = (number) => {
//   if (typeof number !== "number") {
//     return "invalid number";
//   }

//   //
// };

// let x =

// if ((3 && 1) || 5) {
//   console.log("how can this be true?");
// } else {
//   console.log("it is not true");
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let answer = "yes";

const askQuestion = () => {
  readline.question("do you want to do that again?", (inputUser) => {
    answer = inputUser;
    if (answer === "yes") {
      askQuestion();
    } else {
      readline.close();
    }
  });
};

// askQuestion();

// const primeNumbers = [2, 3, 5, 7, 11];

// for (let i = 0; i < primeNumbers.length; i++) {
//   if (primeNumbers[i] < 10) {
//     console.log("aku kurang dari sepuluh");
//     if (primeNumbers[i] % 2 === 0) {
//       console.log("aku genap dan kurang dari sepuluh");
//     }
//   }
// }

// console.log("--------");
// for (let i = 0; i < primeNumbers.length; i++) {
//   if (!(primeNumbers[i] < 10)) continue;
//   console.log("aku kurang dari sepuluh");

//   if (primeNumbers[i] % 2 !== 0) continue;
//   console.log("aku genap dan kurang dari sepuluh");
// }

// const people = [2, 3, 5, 7, 11];

// people.forEach((person, index) => {
//   console.log(person, index);
//   console.log("halo");
// });

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((num) => Math.pow(num, 3));

// console.log(map1);

// 8 => isPowerOfTwo(4) => true
// 4 => isPowerOfTwo(2) => true
// 2 => isPowerOfTwo(1) => true
// 1 => true

//

// const isPowerOfTwo = (number) => {
//   if (number % 1 !== 0) {
//     return false;
//   }

//   if (number === 1) {
//     return true; // 2 ^ 0
//   }

//   if (number % 2 === 1) {
//     return false; // ganjil
//   }

//   return isPowerOfTwo(number / 2);
// };

function PowersOfTwo(num) {
  console.log(num);
  return num && !(num & (num - 1));
}
