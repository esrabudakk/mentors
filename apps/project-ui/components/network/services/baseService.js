import axios from 'axios';

const API_URL = 'https://northwind.vercel.app/api'
//const API_URL2 = "http://157.230.84.216:3000"
const API_URL2 = `${import.meta.env.VITE_BASE_URL}`




export const baseService = {


    get: async (url, token) => {
        const response = await axios.get(API_URL2 + url , {token});
        return response.data;
    },
     getTest: async (url) => {
        const response = await axios.get(API_URL + url, {token});
        return response.data;
    },
    delete: async (url,token) => {
        const response = await axios.delete(API_URL2 + url, {token});
        return response;
    },
    post: async (url, data, token) => {
        const response = await axios.post(API_URL2 + url, data, {token});
        return response;
    },
};
