import axios from 'axios';
import { API_URL } from '../config';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
  timeout: 3000,
});

export const handleError = (message: string, data: any, status: number) => {
  return Promise.reject({ message, data, status });
};

instance.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response && error.response.status) {
      if (error.response.status === 401) {
        // if 401
      } else if (error.response.status === 403) {
        // if 403
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
