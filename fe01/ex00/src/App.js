import React, { useState } from 'react'
import MyForm from './myForm.js';

function App() {
    const [text, setText] = useState("");

    const onChange = (e) => {
        const value = e.target.value;
        setText(value);
        console.log('change : ' + text);
    };

    const onClick = (e) => {
        e.preventDefault();
        console.log('click : ' + text);
    };

    return (
        <div className="App">
            <MyForm onChange={onChange} onClick={onClick} text={text}></MyForm>
        </div>
    );
}

export default App;