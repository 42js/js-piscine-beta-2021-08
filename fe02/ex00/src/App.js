import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import GetInfo from './GetInfo';

const App = () => {
	// const final = axios.create({
	// 	headers: {
	// 		"Notion-Version": "2021-08-16",
	// 	},
	// })

	// final.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`;
	// const URL = 'https://api.notion.com/v1/users';

	// useEffect(() => {
	// 		try {
	// 			final.get(URL)
	// 				.then((response) => {
	// 					console.log(response)
	// 			})
	// 		}
	// 		catch (e) {
	// 			console.log(e)
	// 		}
	// }, [])

	return (
		<div>
			<GetInfo />
			hi
		</div>
	)

}

export default App;
