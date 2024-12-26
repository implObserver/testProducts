import axios from "axios";

const apiUrl = 'https://api.escuelajs.co';

export const defaultQuery = axios.create({
    baseURL: apiUrl,
});