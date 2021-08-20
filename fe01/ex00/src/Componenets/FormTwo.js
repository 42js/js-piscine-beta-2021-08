import React, { useState } from 'react';

function FormTwo() {
  const [input, setInput] = useState('');

  const handleChange = ({ target: { value } }) => {
    console.log(input);

    setInput(value);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <form>
      <input type="name" name="input" value={input} onChange={handleChange} />
    </form>
  );
}

export default FormTwo;
