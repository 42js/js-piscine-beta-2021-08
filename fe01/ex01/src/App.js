import { useState } from "react";
import "./App.css";
import BaseForm from "./BaseForm";
import NumberManage from "./NumManage";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
    console.log(`input change : ${input}`);
  };

  const onClick = () => {
    console.log(`input click : ${input}`);
    setResult(Number(input));
    setInput("");
  };

  const onIncrease = () => {
    setResult((result) => result + 1);
  };

  const onDecrease = () => {
    setResult((result) => result - 1);
  };

  return (
    <div className="App">
      <BaseForm onChange={onChange} onClick={onClick} input={input} />
      <NumberManage
        result={result}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
}

export default App;
