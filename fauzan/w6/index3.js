// input -> process -> output
// arguments -> process -> return

// 3 ways to write functions

const result = add(1, 2); // 3
console.log(result);

// 1. function declaration
function add(a, b) {
  return a + b;
}

// 2. function expression
const substract = function (a, b) {
  return a - b;
};

// 3. arrow function
const multiply = (a, b) => {
  return a * b;
};
