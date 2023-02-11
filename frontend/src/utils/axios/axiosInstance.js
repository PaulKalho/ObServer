import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 100000,
	withCredentials: true,
    headers: {
        Authorization: 'Gocekl',
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;
