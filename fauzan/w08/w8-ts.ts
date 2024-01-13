// Type Inferrence -----------------------------

let firstName = "Fauzan";
let age = 2;
const lastName: string | number = "Alfi";

// firstName = 3;

const primeNumber: (number | string[] | number[] | boolean | boolean[])[] = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  ["a"],
  [1],
  true,
  [true],
];
// primeNumber.push("31");

let person = {
  name: "Fauzan",
  age: 88,
};
// person.address = "Jakarta";

const isPrime = (number: number) => {
  return number % 2 === 0;
};
// isPrime('a')

// Type ----------------------------------------

type apiVersion = "v1" | "v2" | "v3" | "v4" | null | "catur";
const apiVersion: apiVersion = "v1";

const calculateApiVersion = (version: string): apiVersion => {
  if (version === "") return null;
  return "v4";
};

interface PersonType {
  name: string;
  age: number;
  address?: string;
  gender?: "male" | "female";
}

interface PersonInterface {
  name: string;
  age: number;
  address?: string;
  gender?: "male" | "female";
}

const fauzanType: PersonType = {
  name: "Fauzan",
  age: 88,
};

fauzanType.address = "Jakarta";
fauzanType.gender = "male";

type StudentType = PersonType & {
  nim: string;
};

const fauzanStudentType: StudentType = {
  name: "Fauzan",
  age: 88,
  address: "Jakarta",
  gender: "male",
  nim: "123",
};

// Interface -----------------------------------

interface Person {
  name: string;
  age: number;
}

const fauzan: Person = {
  name: "Fauzan",
  age: 88,
};

interface Student extends Person {
  nim: string;
}

const fauzanStudent: Student = {
  name: "Fauzan",
  age: 88,
  nim: "123",
};

// Record --------------------------------------

type address = {
  street: string;
  city: string;
  country: string;
};

type CatInfo = {
  age: number;
  breed: string;
  address?: address;
};

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: {
    age: 10,
    breed: "Persian",
    address: { street: "Jl. A", city: "Jakarta", country: "Indonesia" },
  },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// Generics ----------

function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity("myString");
console.log("here", output);
