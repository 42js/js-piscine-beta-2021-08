import React, { useState } from "react";
import "./App.css";
import FormClick from "./FormClick";
import FormChange from "./FormChange";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const showChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = () => {
    console.log(input);
  };

  return (
    <div className="App">
      <FormClick handleChange={handleChange} handleClick={handleClick} />
      <FormChange handleChange={showChange} />
    </div>
  );
}

export default App;
