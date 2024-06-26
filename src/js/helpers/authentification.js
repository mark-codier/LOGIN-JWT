import instance from "../plugins/axios";
class Toaster{
    constructor(){
        this.toastContainer = document.body.querySelector('.toast_container')
    }
    async errorToaster(){
        this.toastContainer.insertAdjacentHTML('afterbegin',Toaster.errorDiv())
        const toastDiv = this.toastContainer.firstElementChild
        toastDiv.addEventListener('transitionend',()=>{toastDiv.remove()})
        await setTimeout(()=>{toastDiv.classList.add('removedToaster')},3000)
    }
    async successToaster(){
        this.toastContainer.insertAdjacentHTML('afterbegin',Toaster.successDiv())
        const toastDiv = this.toastContainer.firstElementChild
        toastDiv.addEventListener('transitionend',()=>{toastDiv.remove()})
        await setTimeout(()=>{toastDiv.classList.add('removedToaster')},3000)
    }            
    static successDiv(){
        return `
            <div class="toaster-successful toaster">
                <i class="fa-solid fa-circle-check" style="color: #0b7e33;"></i>
                <div style="display: flex;justify-content: center;flex-direction: column;margin: 10px;font-size: small;">
                    <strong><p>Success</p></strong>
                    <p>The login is successful</p>
                 </div>
            </div>
               `
    }
    static errorDiv(){
        return `
            <div class="toaster-failed toaster">
                <i class="fa-solid fa-circle-exclamation" style="color: #bb3030;"></i>
                <div style="display:flex;justify-content:center;flex-direction:column;margin:10px;font-size:small;">
                    <strong><p>Login failed</p></strong>
                    <p>The login is failed</p>
                </div>
            </div>
                `
    }
}
const toaster = new Toaster()
export async function login(inputs){
    try {
        const arr = Object.entries(inputs)
        const postObj = arr.reduce((acc,inp) => {
            acc[inp[0]] = inp[1].value
            return acc;
        },{});
            if(Object.values(postObj).length<3){
                const response = await instance.post('/auth/login',postObj)
                     response.status < 300 ? toaster.successToaster() : toaster.errorToaster()
                     return response.data;
            }else{
                const response = await instance.post('/users/',postObj)
                     response.status < 300 ? toaster.successToaster() : toaster.errorToaster()
                     return response.data;
            }
    } catch (err) {
        console.error(err)   
        // Promise.reject(err)
    }  
}