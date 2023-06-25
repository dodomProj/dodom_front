import axios from 'axios';

export const dodomAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
