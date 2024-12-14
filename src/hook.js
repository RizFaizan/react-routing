/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>The value changes whenever plus or minus button is clicked. 👇</h1>
      <h3>{count}</h3>
      <button onClick={increment}>button</button>
      <button onClick={decrement}>-</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default Counter;
