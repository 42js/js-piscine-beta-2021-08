import React from "react";

const NumberManage = ({ result, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{result}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default NumberManage;
