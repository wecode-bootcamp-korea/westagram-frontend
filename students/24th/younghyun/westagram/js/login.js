
const loginBox = document.querySelector('.boxes');
const loginBtn = document.querySelector('.loginBtn');

loginBox.addEventListener("keyup",()=>{
    let instaId = document.querySelector('.id').value;
    let instaPw = document.querySelector('.pw').value;
    (instaId.includes('@')) && (instaId.length > 4) && ( instaPw.length > 4) ? loginBtn.classList.add('active') : loginBtn.classList.remove('active');
});

loginBtn.addEventListener("click",checkLogin);
window.addEventListener("keypress",(e)=>{
    if(e.keyCode === 13){
        checkLogin();
    }
});

function checkLogin(){
    if(loginBtn.classList.contains('active')){
        alert("로그인 성공!");
    }
}





