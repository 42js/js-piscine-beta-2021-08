import { Client } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: process.env.REACT_APP_NOTION_TOKEN,
});

const databaseId = process.env.REACT_APP_NOTION_ID;

export async function listUsers() {
  try {
    const res = await notion.users.list();
    return res.results;
    console.log("Success!!");
  } catch (err) {
    console.log(err.body);
  }
}
