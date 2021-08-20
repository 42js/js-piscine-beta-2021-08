import { useState } from "react";
import Calc from "./Calc";
import Input from "./Input";

function App() {
    let [value, setState] = useState("1");
    return (
        <div>
            <Input value={value} setState={setState} />
            <Calc value={value} />
        </div>
    );
}

export default App;
