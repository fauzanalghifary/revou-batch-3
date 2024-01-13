// Higher Order Function

const operate = (num1, num2, operator) => {
  return operator(num1, num2);
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

operate(10, 5, () => {
  console.log(10 + 5);
});
operate(10, 5, subtract);
operate(10, 5, add);
operate(10, 5, multiply);

// Closures

const outer = () => {
  let count = 0;

  const innerFunc = () => {
    count++;
    // console.log(count);
    return count;
  };

  return innerFunc;
};

const closureFunc = outer();
console.log(closureFunc()); // 1
console.log(closureFunc()); // 2
console.log(closureFunc()); // 3
console.log(closureFunc()); // 4
closureFunc(); // 5
closureFunc(); // 6
closureFunc(); // 7
console.log(closureFunc()); // 8

// IIFE

const a = (function () {
  console.log("Hello World");
  return "hi";
})();

console.log(a);

// Recursion

const isPowerOfTwo = (number) => {
  if (number % 1 !== 0) {
    return false;
  }

  if (number === 1) {
    return true; // 2 ^ 0
  }

  if (number % 2 === 1) {
    return false; // ganjil
  }

  return isPowerOfTwo(number / 2);
};

console.log(isPowerOfTwo(8));
