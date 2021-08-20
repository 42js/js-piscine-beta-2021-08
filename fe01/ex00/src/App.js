import React, { useState, useEffect } from 'react';
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
  };

  useEffect(() => {
    console.log(text2);
  }, [text2]);

  return (
    <main className="print">
      <div className="title">Pull & Push</div>
      <PrintOnClick
        text={text1}
        onChange={onChange1}
        onKeyPress={onKeyPress}
        onClick={onClick}
      />
      <PrintOnInput text={text2} onChange={onChange2} />
    </main>
  );
}

export default App;
