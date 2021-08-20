import React, { useState } from 'react';

function formNumber() {
  const [input, setInput] = useState(0);

  const handleChange = ({ target: { value } }) => {
    setInput(+value);
  };

  const handlePlusButton = (event) => {
    event.preventDefault();
    console.log(input);
    setInput(input + 1);
  };

  const handleMinusButton = (event) => {
    event.preventDefault();
    console.log(input);
    setInput(input - 1);
  };

  return (
    <form>
      <input type="number" name="input" value={input} onChange={handleChange} />
      <br />
      <button type="submit" name="plus" onClick={handlePlusButton}>
        +1
      </button>
      <button type="submit" name="minus" onClick={handleMinusButton}>
        -1
      </button>
    </form>
  );
}

export default formNumber;
