import { useState } from "react";
import "./App.css";
import BaseForm from "./BaseForm";

function App() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
    console.log(`input change : ${input}`);
  };

  const onClick = () => {
    console.log(`input click : ${input}`);
  };

  return (
    <div className="App">
      <BaseForm onChange={onChange} onClick={onClick} input={input} />
    </div>
  );
}

export default App;
