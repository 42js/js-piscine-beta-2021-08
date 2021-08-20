import React from 'react';
import axios from 'axios';

const App = async () => {
	const data = await axios.get();

	return (
		<div>
			{data}
		</div>
	)
}

export default App;
