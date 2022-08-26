
const MemberBtn = document.querySelector('.MemberBtn') ;
const userEmail = document.querySelector('.userEmail') ;
const userName = document.querySelector('.userName') ;
const userNickName = document.querySelector('.userNickName') ;
const password = document.querySelector('.userPassword');

const isEmail = (email) => {
    const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);}

MemberBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const email = userEmail.value;
    const pass = password.value;
    if(!isEmail(email)){
        alert('이메일형식을 지켜주세요')
    }else if(pass.length < 8){
        alert("비밀번호는 8자 이상입니다.")
    }else{
        localStorage.setItem(email , pass),location.href="css.html"
    }
    }
)

