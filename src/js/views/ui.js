// import localStorageUI from "../helpers/localStorage";
const logUI = {
    form: document.forms['loginForm'],
    email: document.getElementById('log_email'),
    password: document.getElementById('log_password'),
};
const signUI = {
    form: document.forms['signUpForm'],
    email: document.getElementById('sign_email'),
    name:document.getElementById('sign_name'),
    password:document.getElementById('sign_password'),
    role:document.getElementById('sign_role'),
    avatar:document.getElementById('sign_avatar'),
}
export default [logUI,signUI]