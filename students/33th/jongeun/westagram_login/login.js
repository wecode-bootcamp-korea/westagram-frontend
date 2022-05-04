const idInput = document.querySelector('.id_input')
const pwInput = document.querySelector('.pw_input')
const loginBtn = document.querySelector('.login_btn')





pwInput.addEventListener('input',inputIdPw)

function inputIdPw() {
    const idValidation = idInput.value
    const pwValidation = pwInput.value

    if(idValidation.includes('@')  && pwValidation.length >= 5){
        loginBtn.setAttribute('style','cursor:pointer')
        loginBtn.disabled = false;
    }else{
        loginBtn.setAttribute('style','cursor:auto')
        loginBtn.disabled = true;
    }
    idValidation.includes('@') && pwValidation.length >= 5 ? loginBtn.style.backgroundColor ='rgb(63, 157, 251)':loginBtn.style.backgroundColor ='rgb(204, 231, 255)'
}
