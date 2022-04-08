const userInfo = document.getElementById('user');
const userPw = document.getElementById('pw');
const login = document.getElementById('login-btn');

document.getElementById('user').addEventListener("keyup", f);
document.getElementById('pw').addEventListener("keyup", f);

function f(){
    if(userInfo.value !== "" && userPw.value !== ""){
        login.disabled = false;
        login.style.backgroundColor = 'blue';
    }else if(a.value == "" || b.value == ""){
        login.disabled = true;
        login.style.backgroundColor = 'lightblue';
        login.style.opacity=0.5;
    }
};
