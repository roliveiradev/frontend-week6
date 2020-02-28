import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://rroweek-backend.herokuapp.com'
    //baseURL: process.env.REACT_APP_API_URL
    baseURL: 'http://localhost:3333'
});

export default api;