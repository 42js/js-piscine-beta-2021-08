const { Client } = require("@notionhq/client");

const notion = new Client({
    auth: process.env.REACT_APP_NOTION_ACCESS_TOKEN,
})

const list = (async () => {
    const listUsersResponse = await notion.users.list()
    console.log(listUsersResponse);
})

function App() {
  list();
  return (
    <div>
    </div>
  );
}

export default App;
