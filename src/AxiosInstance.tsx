// axiosInstance.js
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://strapi-4wr0.onrender.com/api',
})

export default axiosInstance
