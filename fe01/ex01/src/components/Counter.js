import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onChange = (e) => {
        let num = e.target.value;
        if (!isNaN(num))
            setNumber(Number(e.target.value));
        else
            setNumber(NaN);
        
    };

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <input type="text" onChange={onChange} value={number} />
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;