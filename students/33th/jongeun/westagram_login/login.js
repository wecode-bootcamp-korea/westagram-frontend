const idInput = document.querySelector('.id_input')
const pwInput = document.querySelector('.pw_input')
const loginBtn = document.querySelector('.login_btn')


pwInput.addEventListener('input',inputIdPw)

function inputIdPw() {
    if(idInput.value && pwInput.value){
        loginBtn.setAttribute('style','cursor:pointer')
        loginBtn.disabled = false;
    }
    idInput.value && pwInput.value ? loginBtn.style.backgroundColor ='rgb(63, 157, 251)':loginBtn.style.backgroundColor ='rgb(204, 231, 255)'
}
