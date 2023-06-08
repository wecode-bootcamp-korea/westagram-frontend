const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const loginBtn = document.querySelector('#loginBtn');

function loginCheck(){
    if((id.value && pw.value) && (id.includes('@') && pw.length > 5)){
        loginBtn.disabled = false;
        loginBtn.style.background = "#55b6f9"
    }else{
        loginBtn.disabled = true;
        loginBtn.style.background = "#c4e0fb"
    }
}


id.addEventListener("keyup", loginCheck)
pw.addEventListener("keyup", loginCheck)

