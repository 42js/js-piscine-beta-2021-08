const App = () => {
	const onClick = (e) => {
		e.preventDefault();
	}
	return (
		<div>
			<form type="submit">
				<input onClick={onClick} value />
			</form>
		</div>
	);
}

export default App;
