import React, { useState } from "react";
import "./App.css";
import FormChange from "./FormChange";
import Result from "./Result";
import Button from "./Button";

function App() {
  const [result, setResult] = useState();
  const handleChange = (e) => {
    setResult(Number(e.target.value));
  };

  const handleIncrease = () => {
    setResult((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setResult((prev) => prev - 1);
  };
  return (
    <div className="App">
      <FormChange handleChange={handleChange} />
      <Result result={result} />
      <Button onIncrease={handleIncrease} onDecrease={handleDecrease} />
    </div>
  );
}

export default App;
