const id = document.getElementById('id')
const password = document.getElementById('password')
const loginButton = document.getElementById('loginButton')
const error = document.getElementById('error')
loginButton.disabled=true;

id.addEventListener('keyup', () => buttonActive())
password.addEventListener('keyup', () => buttonActive())
loginButton.addEventListener('click', () => validation())

function buttonActive(){
    if(id.value.length>0 && password.value.length>0){
        loginButton.disabled=false;
        loginButton.style.backgroundColor = '#0095F6';
        loginButton.classList.add('loginButtonHover')
    } else{
        loginButton.disabled=true;
        loginButton.style.backgroundColor = '#C4E1FB';
        loginButton.classList.remove('loginButtonHover')
    }
}

function validation(){
    if (id.value.includes('@') && password.value.length>4){
        location.href='./main.html';
    } else {
        error.innerText='사용자 정보를 확인하고 다시 입력해주세요.';
    }
}


