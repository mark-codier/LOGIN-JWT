function errorTemplate(msg) {
    // return `
    // <div class="pop-up-container">
    //     <div class="error-message">${msg}</div>
    // </div>
    // `
    return `
        <div class="error-message">${msg}</div>
           `
};

/**
 * Function showError. Returns krasivy error message.
 * @param {HTMLInputElement} el 
 */
export function showError(el) {
    if(!el.classList.contains('is-invalid')){
        const parent = el.parentElement;
        const msg_value = el.getAttribute('data-invalid-message') || 'Input is not correct';
        const template = errorTemplate(msg_value);
        parent.insertAdjacentHTML('beforeend', template)
    }
    el.classList.add('is-invalid')
};
export function removeError(el){
    if(!el.classList.contains('is-invalid')){return;};
    const parent = el.parentElement;
    parent.inser
}