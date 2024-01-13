import { useState } from "react";
import "./App.css";
import CustomButton from "./reusableComponents/Button";

function App() {
  const [count, setCount] = useState(0);
  const counter = 1;

  const handleClick = (num: number) => {
    console.log(num);
  };

  const logMathRandom = () => {
    console.log(Math.random());
    setCount((prev) => prev + 1);
  };

  type Person = {
    name: string;
    address: {
      street: string;
      city: string;
      province?: string;
    };
  };

  const person: Person = {
    name: "Fauzan",
    address: {
      street: "Jl. Raya",
      city: "Jakarta",
    },
  };

  return (
    <>
      {person.address.province}
      <h1 onClick={logMathRandom}>Vite + React {count}</h1>
      <div className="card bg-inherit">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <CustomButton
        text={`add 5`}
        className="bg-red-500"
        onClick={(num: number) => {
          console.log(num);
        }}
        setCount={setCount}
        count={count}
        handleClick={handleClick}
      />
    </>
  );
}

export default App;
