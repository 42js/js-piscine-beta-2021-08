import React, { useState } from "react";

function App() {

  const [ number, setNumber ] = useState(0);

  const plusOne = (e) => {
    setNumber(number + 1);
  }

  const minusOne = (e) => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plusOne}>+1</button>
      <button onClick={minusOne}>-1</button>
    </div>
  );
}

export default App;
