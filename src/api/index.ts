import axios from 'axios';

export const dodomAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const notionAPI = axios.create({
  proxy: {
    host: 'api.notion.com',
    port: 8080,
  },
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
    'Notion-Version': '2022-06-28',
  },
});
