const idInput = document.getElementById('login-id');
const pwInput = document.getElementById('login-pw');
const loginBtn = document.getElementById('login-btn');

const verifyId = () => {
    const idValue = idInput.value;
    return idValue.includes('@') ? true : false;
}
const verifyPw = () => {
    const pwValue = pwInput.value;
    return pwValue.length >= 5 ? true : false;
}

const loginCheck = () => {
    if (verifyId() && verifyPw()) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}

idInput.addEventListener('keyup', loginCheck);
pwInput.addEventListener('keyup', loginCheck);





/*const input = document.querySelector('.login-container')
const idInput = document.getElementById('login-id');
const pwInput = document.getElementById('login-pw');
const loginBtn = document.getElementById('login-btn');

function loginCheck(e) {
    const idInputValue = idInput.value;
    const pwInputValue = pwInput.value;
    console.log(idInputValue);
    if (idInputValue.includes('@') && (pwInputValue.length >= 5)) {
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false;
    }
}

//input.addEventListener('keyup', loginCheck);

input.addEventListener('keyup', loginCheck);
idInput.addEventListener('keyup', loginCheck);
pwInput.addEventListener('keyup', loginCheck);
*/