import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_REST_API}/api`,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
})

export default axiosInstance
