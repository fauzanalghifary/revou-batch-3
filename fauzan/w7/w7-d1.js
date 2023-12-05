import _, { add } from "lodash";

console.log(add(1, 2));

const users = [
  { name: "fred", age: 48 },
  { name: "barney", age: 34 },
  { name: "fred", age: 40 },
  { name: "barney", age: 36 },
];

const sortedUsers = _.orderBy(users, ["name", "age"], ["asc", "desc"]);

console.log(sortedUsers);
