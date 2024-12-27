import axios from "axios";
//https://fakestoreapi.com
//https://api.escuelajs.co

const apiUrl = 'https://api.escuelajs.co';

export const defaultQuery = axios.create({
    baseURL: apiUrl,
});