export default class Interceptors {
    constructor(instance){
        this.axios = instance;
    }
    init(){
        this.axios.interceptors.request.use(this.setTokenFromLS,this.onError)
        this.axios.interceptors.response.use(this.getToken,this.onError)
    }
    onError(err){
        return Promise.reject(err)        
    }
    /**
     * 
     * @param {string} res.config.url
    *  @param {*} res
     * @returns 
     */
    getToken(res){
        console.log(res)
        if(res.config.url.includes('/login')){
            const token = res.data.access_token
            localStorage.setItem('my_token', token)
            return res;
        }
    }
    setTokenFromLS(req){
        if (!req.url.includes('auth')) {
            req.headers['Authorization'] = `Bearer ${localStorage.getItem('my_token')}`
        }
        console.log(req)
        return req;
    }
}