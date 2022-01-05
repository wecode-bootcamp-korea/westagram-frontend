const loginId = document.getElementById('login_id');
const loginPassword = document.getElementById('login_password');
const buttonLogin = document.getElementById('button_login');

function loginEvent(){

    if(loginId.value.length >= 1 && loginPassword.value.length >= 1){
        console.log('조건 맞음')
        buttonLogin.disabled=false;
        buttonLogin.style.backgroundColor='#0095F6';
        

    }
    
}

loginId.addEventListener('keyup',loginEvent);
loginPassword.addEventListener('keyup',loginEvent);

function login(){
    console.log(loginId.value);
    console.log(loginId.value.includes('@'));
    console.log(loginPassword.value);

    if(!loginId.value.includes('@')){
        alert('@를 포함하세요');
        return;
    }
    if(loginPassword.value.length<6) {
        alert('비밀번호를 5자 이상 입력하세요');
        return;
    }
    location.href="main.html";
}



