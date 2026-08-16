import axios from "axios";

const BASE_URL = `https://upskilling-egypt.com:3007/api`;
const BASE_AUTH = `${BASE_URL}/auth`;

export const AUTH_URLS = {
  login: `${BASE_AUTH}/login`,
  register: `${BASE_AUTH}/register`,
  resetPassword: `${BASE_AUTH}/reset-password`,
  changePassword: `${BASE_AUTH}/change-password`,
  forgotPassword: `${BASE_AUTH}/forgot-password`,
  logout: `${BASE_AUTH}/logout`,
};

// ==================================================
export const GetAllBooks = `${BASE_URL}/book`;

export const GetAllcategory = `${BASE_URL}/category`;

export const Basket = `${BASE_URL}/basket`;

export const GetMyOrders = `${BASE_URL}/order/my`;

export const CreateOrder = `${BASE_URL}/order`;
//    /api/order / 664cc2495a4db11bb9c4faf6


const api = axios.create({
  baseURL: 'https://upskilling-egypt.com:3007/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  }
  config.headers['Content-Type'] = 'application/json'; 
  config.headers.language = 'en'; 
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api; 