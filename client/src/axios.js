import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  delayed: true,
});

instance.interceptors.request.use((config) => {
  if (config.delayed) {
    return new Promise((resolve) => setTimeout(() => resolve(config), 1500));
  }
  return config;
});

export default instance;
