import React from 'react';
import './Input.css';

const Input = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="input">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        ADD
      </div>
    </div>
  );
};

export default Input;
