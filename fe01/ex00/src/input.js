import React, { useState } from 'react';

export const Input1 = () => {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault();
        if (input === '') console.log("빈 문자열입니다.");
        else console.log(input);
        setInput('');
    }

    return(
        <div>
            <div>input 1</div>
            <form>
                <input
                    type='text'
                    onChange={onChange}
                    value={input}
                />
                <button onClick={onClick}>Click</button>
            </form>
        </div>
    );
}

export const Input2 = () => {

    const onChange = (e) => {
        console.log(e.target.value);
    }

    return(
        <div>
            <div>input 2</div>
            <form>
                <input
                    type='text'
                    onChange={onChange}
                />
                </form>
        </div>
    )
}