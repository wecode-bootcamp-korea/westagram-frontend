
const loginBtn = document.querySelector('.login_btn');
const userId = document.querySelector('.user_id');

window.addEventListener('keyup', ()=>{
    const userPw = document.querySelector('.user_pw');
    if(userPw.value.length > 0 && userId.value.length >0 ){
        loginBtn.disabled = false;
        return loginBtn.classList.add('active');
    }

    loginBtn.disabled = true;
    return loginBtn.classList.remove('active');
})