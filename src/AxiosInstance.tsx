// axiosInstance.js
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        Authorization:
            'Bearer 27b41c58ad3fe514d81d59b96750a6e0a9aee093ef06ba0503c8dffc7efe77d26ccdaf4bf4f7ac91891beb235db87cfb2b6b2983367c5cec098a17b2997abc5adc0850330d1e97b2f2b0b7eda0290481486f5cd3521855ec111253aa948601f578838b20d6981990760829a765dc982ad8fa6f658be18def32bd35e61fccffef',
    },
})

export default axiosInstance
