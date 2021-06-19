import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  params: {
    apiKey: process.env.VUE_APP_API_KEY,
  },
});

export default api;
