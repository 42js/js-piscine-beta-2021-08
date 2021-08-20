import React, { useState } from 'react';
import UpDown from './components/UpDown';
import './App.css';

function App() {
  const [num, setNum] = useState(NaN);

  const onChange = (e) => {
    console.log(e.target);
    setNum(+e.target.value);
  };

  const onClickUp = () => {
    setNum(num + 1);
  };

  const onClickDown = () => {
    setNum(num - 1);
  };

  return (
    <>
      <main className="print">
        <div className="title">Up & Down</div>
        <UpDown
          num={num}
          onChange={onChange}
          onClickUp={onClickUp}
          onClickDown={onClickDown}
        />
      </main>
    </>
  );
}

export default App;
