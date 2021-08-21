import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getApi = async () => {
			const url = `https://cors.bridged.cc/https://api.notion.com/v1/users/`;
			try {
				const response = await axios.get(url, {
					headers: {
						"Authorization": `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
						"Notion-Version": "2021-08-16",
					}
				})
				setData(response.data.results)
				console.log(response.data)
			} catch (e) {
				setError(e);
			}
		}
		getApi();
	}, []);

	return (
		<div>
			{error ? error : (data ? data.map((data) => (
				<ul>
					<li key={data.id}>{data.name}</li>
					<li key={`${data.id} + 1`}>{data.person? data.person.email : 'no E-mail'}</li>
					<li key={`${data.id} + 2`}>{data.type}</li>
					<img alt={data.name}>{data.avatar_url}</img>
				</ul>
			)) : 'No Users!')}
		</div>
	)

}

export default App;
