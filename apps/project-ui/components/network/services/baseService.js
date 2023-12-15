import axios from 'axios';
import { API_URL } from '../env/config';

//const API_URL = 'https://northwind.vercel.app/api'

export const baseService = {
    get: async (url) => {
        const response = await axios.get(API_URL + url);
        return response.data;
    },
    delete: async (url) => {
        const response = await axios.delete(API_URL + url);
        return response;
    },
    post: async (url, data) => {
        const response = await axios.post(API_URL + url, data);
        return response;
    },
};
