import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  // array destructuring
  // const primeNum =
  const [firstPrime, secondPrime, thirdPrime, fourPrime, ...restOfPrimes] = [
    1, 3, 5, 7, 11, 13, 17,
  ];
  // console.log(firstPrime); // 1
  // console.log(`The first prime number is ${firstPrime}`); // The first prime number is 1

  // object destructuring
  const person = {
    name: "John",
    age: 21,
    address: "New York",
  };

  // console.log(person.name); // John

  const { name } = person;
  // console.log(name); // John

  const handleClick = (text: string) => {
    // console.log("Hello");
    console.log(text);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={() => handleClick("ok")}>Vite + React</h1>
      <div className="card bg-inherit">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <button>INI BUTTON BIASA</button> */}
      <Button text="Helloooo" className="bg-red-500" />
      <Button text="Hi" className="bg-blue-500" />
    </>
  );
}

export default App;
