import axios from "axios";
const notionKey = process.env.REACT_APP_NOTION_KEY;

async function getNotionApi() {
    try {
        //응답 성공
        console.log("try");
        const response = await axios.get(
            "https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/users",
            {
                headers: {
                    Authorization: `Bearer ${notionKey}`,
                    "Notion-version": "2021-08-16",
                },
            }
        );
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}

export default getNotionApi;
