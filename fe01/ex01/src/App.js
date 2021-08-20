import React, { useState } from 'react';
import InputNum from './components/InputNum';
import UpDown from './components/UpDown';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const onClick = () => {};

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick();
    }
  };

  const onClickUp = () => {
    setNum(num + 1);
  };

  const onClickDown = () => {
    setNum(num - 1);
  };

  return (
    <div className="App">
      <InputNum onChange={onChange} onKeyPress={onKeyPress} onClick={onClick} />
      <UpDown num={num} onClickUp={onClickUp} onClickDown={onClickDown} />
    </div>
  );
}

export default App;
