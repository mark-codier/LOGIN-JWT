import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './views/UI';
import { validate } from './helpers/validate';
import { showError,removeError } from './views/form';
import { login } from './helpers/authentification';
import changeUI from './views/sing_up_form';
changeUI.changeINIT()
// const { form, email, password } = UI;
UI.forEach(UI => {
    const {form,...inputs} = UI;
    form.addEventListener('submit', e => {
        e.preventDefault();
        onSubmit(inputs);
    });
})
//handlers
async function onSubmit(inputs) {
    // //////////////////////////////////////
    Object.values(inputs).forEach((inp)=>{
        inp.addEventListener('focus',()=>{
            removeError(inp)
        })
    })
    // ??????????????????????????????????????
    const isValid = Object.values(inputs).every(inp => {
        const isValidInput = validate(inp);
        if (!isValidInput){showError(inp)};
        return isValidInput;
    });
    isValid ? console.log(await login(inputs)) : 0;
}
