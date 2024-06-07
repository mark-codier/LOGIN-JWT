import Axios from "axios";
import Interceptors from "./interceptors";
const instance = Axios.create({
    baseURL : 'https://api.escuelajs.co/api/v1',
    headers:{
        'Content-Type':'application/json;charset=UTF-8'
    }
})
const interceptorsUI = new Interceptors(instance);
interceptorsUI.init()
export default instance;