import React from 'react';
import axios from 'axios';

const data = async () => {
	const url = `https://cors.bridged.cc/https://api.notion.com/v1/users/`;
	try {
		const response = await axios.get(url, {
			headers: {
				"Authorization": `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
				"Notion-Version": "2021-08-16",
			}
		})
		console.log(response)
	} catch (e) {
		console.log(e)
	}
}

const GetInfo = () => {
	const response = data();
	return (
		<div>
			{response && <textarea rows={7} value={JSON.stringify(response, null, 2)} readOnly={true} /> }
		</div>
	);
};

export default GetInfo;
