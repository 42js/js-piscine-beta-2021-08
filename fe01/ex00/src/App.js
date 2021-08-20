import React, { useState } from 'react';
import PrintOnInput from './components/PrintOnInput';
import PrintOnClick from './components/PrintOnClick';
import './App.css';

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const onChange1 = (e) => {
    setText1(e.target.value);
  };

  const onClick = () => {
    console.log(text1);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick();
    }
  };

  const onChange2 = (e) => {
    setText2(e.target.value);
    console.log(text2);
  };

  return (
    <div className="App">
      <PrintOnClick
        onChange={onChange1}
        onKeyPress={onKeyPress}
        onClick={onClick}
      />
      <PrintOnInput onChange={onChange2} />
    </div>
  );
}

export default App;
