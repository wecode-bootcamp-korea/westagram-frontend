const idd = document.getElementById("login_id");  //DOM에 접근
const pwdd = document.getElementById("login_pwd");
const btnBtn = document.getElementsByClassName("login_btn")[0];

const activeLogin = () => {
    let id = idd.value;
    let pwd = pwdd.value;
    
    if((id && pwd) && (pwd.length > 1)) {
        btnBtn.classList.add('login_input');
    }
    else {
        btnBtn.classList.remove('login_input');
    }
}

idd.addEventListener('keyup', activeLogin);  //keyup 이벤트가 발생하면 함수가 실행된다.
pwdd.addEventListener('keyup', activeLogin);