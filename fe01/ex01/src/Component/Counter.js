import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [number, setNumber] = useState(0);

  const onDecrease = () => {
    setNumber(number - 1);
  };

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <form>
    <input
      type="number"
      value={number}
      onChange={handleChange}
    />
    <button type="button" onClick={onIncrease}> +1 </button>
    <button type="button" onClick={onDecrease}> -1 </button>
    <h1>{number}</h1>
  </form>
  );
}

export default Counter;