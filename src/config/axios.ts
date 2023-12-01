import axios from 'axios';
// const BASE_URL = ''

export function configureAxios() {
    axios.defaults.baseURL = 'http://localhost:8000';
    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );
}