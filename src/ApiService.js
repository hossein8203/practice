import axios from "axios";
import {toast} from "react-toastify";


const instance = axios.create({
    baseURL: "http://localhost:4000/api/"
})

const token = localStorage.getItem('token')


instance.defaults.headers.common["authorization"] = `Bearer ${token}`


instance.interceptors.response.use(null, error => {
    console.log(error.response)

    error.response && error.response.data && toast(error.response.data.error,{
        position:"top-center"
    })
})

export const useAxios = {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete
}


