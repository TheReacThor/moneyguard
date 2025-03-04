import axios from 'axios';

// API temel URL'si
const BASE_URL = 'https://wallet.goit.ua/api';

// Axios instance oluşturma
export const instance = axios.create({
  baseURL: BASE_URL,
});

// Token interceptor
export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};
