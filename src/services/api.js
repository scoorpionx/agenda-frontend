import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ENDERECO DE IP:3333/v1/',
});

export default api;