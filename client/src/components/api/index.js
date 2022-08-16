import axios from 'axios';

export const apiDog = axios.create({
    baseURL: 'http://localhost:3001'
})