import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com',
});

export default axiosInstance;