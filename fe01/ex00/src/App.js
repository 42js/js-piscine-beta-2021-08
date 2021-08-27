import React, { useState } from 'react';
import './App.css';

function App() {

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const onChange1 = (e) => {
    setText1(e.target.value);
  }

  const onChange2 = (e) => {
    setText2(e.target.value);
    console.log(`onChange: ${e.target.value}`);
  }

  const onClick = (e) => {
    e.preventDefault();
    console.log(`onClick: ${text1}`);
    setText1('');
  }

  const onReset = (e) => {
    e.preventDefault();
    setText2('');
  }

  return (
    <div>
      <form>
        <p>클릭 이벤트</p>
        <input onChange={onChange1} value={text1}/>
        <button onClick={onClick}>Click</button>
      </form>
      <form>
        <p>인풋 이벤트</p>
        <input onChange={onChange2} value={text2}/>
        <button onClick={onReset}>Reset</button>
      </form>
    </div>
  );
}

export default App;
