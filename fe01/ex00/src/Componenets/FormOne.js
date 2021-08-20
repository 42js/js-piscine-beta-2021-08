import React, { useState } from 'react';

function FormOne() {
  const [input, setInput] = useState('');

  const handleChange = ({ target: { value } }) => setInput(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="name" name="input" value={input} onChange={handleChange} />
      <button type="submit">클릭</button>
    </form>
  );
}

export default FormOne;
