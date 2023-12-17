import axios from 'axios';
//import { API_URL } from '../env/config';

const API_URL = 'https://northwind.vercel.app/api'
const API_URL2 = "http://157.230.84.216:3000"

export const baseService = {
    get: async (url) => {
        const response = await axios.get(API_URL2 + url);
        return response.data;
    },
     getTest: async (url) => {
        const response = await axios.get(API_URL + url);
        return response.data;
    },
    delete: async (url) => {
        const response = await axios.delete(API_URL2 + url);
        return response;
    },
    post: async (url, data) => {
        const response = await axios.post(API_URL2 + url, data);
        return response;
    },
};
