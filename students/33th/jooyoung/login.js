
const loginBtn = document.querySelector('.login_btn');
const userId = document.querySelector('.user_id');

window.addEventListener('keyup', ()=>{
    const userPw = document.querySelector('.user_pw');
    if(userPw.value.length > 0 && userId.value.length >0 ){
        return loginBtn.classList.add('active');
    }
})