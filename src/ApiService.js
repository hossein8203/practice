import axios from "axios";
import {toast} from "react-toastify";


const instance = axios.create({
    baseURL : "http://localhost:4000/api/"
})


instance.interceptors.response.use(null,error => {
    console.log(error.response)
    if (error.response && error.response.status == 403){
        toast("عدم دسترسی به سرور!")
        return ;
    }
    if (error.response && error.response.status == 404 ){
        toast("پیدا نشد!")
        return;
    }
    toast("عدم اتصال به سرور!")
})
