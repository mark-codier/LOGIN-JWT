const regExDict = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,  
    text: /^[0-9a-zA-Z]{2,}$/,  
    avatarUrl: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
}

/**
 * Function for input validation
 * @param {HTMLInputElement} el - 
 * @returns {boolean}
 */

export function validate(el) {
    const reqName = el.dataset.required || 'text';
    const regResult = regExDict[reqName].test(el.value);
    return regResult;
}