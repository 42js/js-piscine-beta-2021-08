import React,{ useEffect, useState } from 'react';

const Change = () => {
	const [input, setInput] = useState('')

	const onChange = (e) => {
		if (isNaN(e.target.value))
			e.preventDefault();
		setInput(parseInt(e.target.value));
	}
	const onKeyPress = (e) => {
		if ((e.key === 'e' || e.key === 'E'))
			e.preventDefault();
	}
	const onClickAdd = () => setInput(input + 1);
	const onClickMinus = () => setInput(input - 1);

	useEffect(() => {
		console.log(input);
	}, [input]);

	return (
		<div>
			<input type="number" onChange={onChange} value={input} onKeyPress={onKeyPress} required/>
			<button onClick={onClickAdd}>+1</button>
			<button onClick={onClickMinus}>-1</button>
			<div>값 : {input}</div>
		</div>
	);
}

export default Change;
