import React,{ useEffect, useState } from 'react';

const Change = () => {
	const [input, setInput] = useState('')

	const onSubmitInput = (e) => {
		e.preventDefault();
	}
	const onChange = (e) => {
		setInput(e.target.value);
	}

	useEffect(() => {
		console.log(input);
	}, [input]);

	return (
		<div>
			<div>2번째 컴포넌트</div>
			<form onSubmit={onSubmitInput}>
				<input onChange={onChange} value={input} required/>
			</form>
		</div>
	);
}

export default Change;
