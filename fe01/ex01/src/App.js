import React from 'react';
import './App.css';
import formNumber from './Componenets/FormNumber';

function App() {
  return (
    <main className="app">
      <div className="title">fe00-ex01</div>
      <section className="form-one">{formNumber()}</section>
    </main>
  );
}

export default App;
