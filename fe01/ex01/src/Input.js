import React, { useEffect, useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('')

    const onChange = (e) => {
        if (isNaN(e.target.value))
            e.preventDefault();
        setInput(parseInt(e.target.value));
    }

    const onIncrease = (e) => {
        if (typeof input === 'number')
            setInput(input + 1);
        e.preventDefault();
    }

    const onDecrease = (e) => {
        if (typeof input === 'number')
            setInput(input - 1);
        e.preventDefault();
    }

    useEffect(() => {
        if (typeof input === 'number')
            console.log(input);
    }, [input]);

    return(
        <div>
            <form>
                <input
                    type='number'
                    onChange={onChange}
                    value={input}
                />
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                <div>value: {input}</div>
            </form>
        </div>
    );
}

export default Input;