const obj = { value: 42 };

function getValue(prefix) {
  console.log(prefix + this.value);
}

console.log(this); // Outputs: Window
getValue("The answer is: "); // ERROR: Cannot read property 'value' of undefined

const boundFunction = getValue.bind(obj, "The answer is: ");
boundFunction(); // Outputs: The answer is: 42

getValue.call(obj, "The answer is: "); // Outputs: The answer is: 42

getValue.apply(obj, ["The answer is: "]); // Outputs: The answer is: 42
