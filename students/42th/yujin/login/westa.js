const loginId = document.getElementById('login_id');
const loginPw = document.getElementById('password');
const loginBtn = document.getElementById('login_btn');

function color() {
    if(loginId.value.length > 0 && loginPw.value.length > 0) {
      loginBtn.style.backgroundColor = "2023f5";
      loginBtn.disabled = false;   
    }
    else{
        loginBtn.style.backgroundColor = "ccdffeb3";
        loginBtn.disabled = true;
    }
}


loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
