import React, { useState } from "react";

function CounterState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((Currentnum) => Currentnum + 1);
  }

  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default CounterState;
