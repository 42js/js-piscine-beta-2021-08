import React, { useState } from 'react';
import InputNum from './components/InputNum';
import UpDown from './components/UpDown';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const onChange = (e) => {
    setNum(+e.target.value);
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
    <main className="print">
      <div className="title">use functions</div>
      <InputNum
        num={num}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onClick={onClick}
      />
      <UpDown onClickUp={onClickUp} onClickDown={onClickDown} />
    </main>
  );
}

export default App;
