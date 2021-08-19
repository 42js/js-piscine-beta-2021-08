import React,{ useState } from 'react';

const Click = () => {
	const [input, setInput] = useState('')

	const onSubmit = (e) => {
		e.preventDefault();
		if (input === '')
			return ;
		console.log(input);
		setInput('');
	}
	const onSubmitInput = (e) => {
		e.preventDefault();
	}
	const onChange = (e) => {
		setInput(e.target.value);
	}
	return (
		<div>
			<div>1번째 컴포넌트</div>
			<form onSubmit={onSubmitInput}>
				<input onChange={onChange} value={input} required/>
			</form>
			<form>
				<button onClick={onSubmit}>click</button>
			</form>
		</div>
	);
}

export default Click;
