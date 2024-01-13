type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Person = {
  name: string;
  age: number;
  address?: Address; // Address is optional
};

const personWithoutAddress: Person = {
  name: "John Doe",
  age: 25,
  // No address provided
};

const personWithAddress: Person = {
  name: "Jane Smith",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
};

// Accessing address using optional chaining
const streetLengthWithoutAddress = personWithoutAddress?.address?.street.length; // undefined
const streetLengthWithAddress = personWithAddress?.address?.street.length; // 12

console.log(streetLengthWithoutAddress); // undefined
console.log(streetLengthWithAddress); // 12
