const userId = document.querySelector('.userId');
const password = document.querySelector('.userPassword');
const loginBtn = document.querySelector('.loginBtn') ;
const MemberBtn = document.querySelector('.MemberBtn') ;
const userEmail = document.querySelector('.userEmail') ;
const userName = document.querySelector('.userName') ;
const userNickName = document.querySelector('.userNickName') ;
const loginFrom =  document.querySelector('.loginform');

const isEmail = (email) => {
    const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
}
loginFrom.addEventListener('keyup',(e)=>{
    e.preventDefault();
    if(userId.value && password.value) {
        loginBtn.removeAttribute('disabled');
        loginBtn.style.backgroundColor='#0095F6';
}})
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const id = userId.value;
    const pass = password.value;
    if(!isEmail(id)){
        alert('이메일형식을 지켜주세요')
    }else if(pass.length < 8){
        alert("비밀번호는 8자 이상입니다.")
    }else if(
        localStorage.getItem(id) !== pass){
        alert("아이디를 확인해주세요")
        }
    else{
        location.href="westagram.html"
    }
    }
)

