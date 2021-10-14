/* Mission1 - 로그인 버튼 활성화 */
const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');

function color() {
    if(loginId.value.length>0 && loginPw.value.length>0){
        loginBtn.style.backgroundColor = "#0095F6";
    }else{
        loginBtn.style.backgroundColor = "#C0DFFD"
    }
}

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);






