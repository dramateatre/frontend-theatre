// axiosInstance.js
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.batumitheatre.ge/api',
    headers: {
        Authorization:
            'Bearer c0888f50533d9ef6a8afdea3386ce61cf0b8f2c443b0184cd8e9aca4978f2f6a7a8a343a68c51a501a07cd492eb32d265ed3b71e4eb24287ef73e659878c34f05bdf7dd3eba11118b2a1c6c7ea4df08b720491d47aa31f6f6cb082702adac43d7d414289123eee484ddd76ba403e6257d540cef72eecfbba6f6924bf80d2bab9',
    },
})

export default axiosInstance
