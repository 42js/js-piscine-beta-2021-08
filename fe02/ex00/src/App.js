const { Client } = require("@notionhq/client");
const axios = require("axios");

const notion = new Client({
    auth: process.env.REACT_APP_NOTION_ACCESS_TOKEN,
})

const list = (async () => {
	console.log(notion);
  	const listUsersResponse = await axios({

	});
  	// console.log(listUsersResponse);
})

function App() {
  	list();
  	return (
    	<div>
    	</div>
  	);
}

export default App;
