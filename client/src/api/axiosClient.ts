import { showNotification } from '@mantine/notifications';
import axios from 'axios';

export const axiosClient = axios.create({ baseURL: process.env.VITE_SERVER_URL });

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (typeof error.response.data === 'string') showNotification({ message: error.response.data, color: 'red' });
    return Promise.reject(error);
  }
);
