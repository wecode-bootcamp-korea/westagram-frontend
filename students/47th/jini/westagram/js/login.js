const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const loginBtn = document.querySelector('#loginBtn');

function loginCheck(){
    //validation(유효성 검사)
    if((id.value.includes('@') && pw.value.length > 5) ? loginBtn.disabled = false : loginBtn.disabled = true){
        loginBtn.style.background = "#c4e0fb"
    }else{
        loginBtn.style.background = "#55b6f9"
    }
}
id.addEventListener("keyup", loginCheck)
pw.addEventListener("keyup", loginCheck)

