import React, { useState } from 'react'
function InputOnChange (){
const [text, settext] = useState("");
const increase = () => {
    settext(text*1 + 1);
}
const decrease = () => {
    settext(text*1 - 1);
}
return(
    <section className="InputForm">
    <form>
        <input value={text} onChange={e => settext(e.target.value)}/>
    </form>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </section>
    );
}
export default InputOnChange;