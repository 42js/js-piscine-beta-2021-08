import React from 'react';
import './App.css';
import formOne from './Componenets/FormOne';
import formTwo from './Componenets/FormTwo';

function App() {
  return (
    <main className="app">
      <div className="title">fe00-ex00</div>
      <section className="form-one">{formOne()}</section>
      <section className="form-two">{formTwo()}</section>
    </main>
  );
}

export default App;
