import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true  //to send cookie
})

export default axiosInstance
    