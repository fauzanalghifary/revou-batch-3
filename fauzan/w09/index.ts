const isPrimeNumber = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

// isPrimeNumber = (num: number): boolean => {
//   return false;
// };

console.log(isPrimeNumber(2)); // false

const fruits = ["apple", "banana", "orange"];

// fruits = ["apple", "banana", "orange", "mango"];
