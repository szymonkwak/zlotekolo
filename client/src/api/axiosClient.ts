import axios from 'axios';

export const axiosClient = axios.create({ baseURL: process.env.VITE_SERVER_URL });
