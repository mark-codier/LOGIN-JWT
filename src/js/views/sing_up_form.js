class ChangeOfForm {
    constructor(){
        this.sign_btn = document.body.querySelector('#sign_btn');
    }
    changeINIT(){
        this.sign_btn.addEventListener('click',()=>{
            this.formReplacement()
            
        })
    }
    formReplacement(){
        const logForm = document.body.querySelector('#loginForm');
        const signForm = document.body.querySelector('#signUpForm')
        logForm.classList.toggle('d-none')
        signForm.classList.toggle('d-none')
        logForm.classList.toggle('d-flex')
        signForm.classList.toggle('d-flex')
    }
    btnReplacement(){}
        
}
const changeUI = new ChangeOfForm()
export default changeUI;    