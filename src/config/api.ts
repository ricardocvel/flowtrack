import axios from 'axios';
// import { getToken } from "../auth/auth";

const SERVER_API = process.env.SERVER_API

const api = axios.create({
  baseURL: 'http://192.168.1.200',
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*'
    },
  timeout: 3000,
})

api.interceptors.request.use(async config => {
    // const token = getToken();
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

export default api;