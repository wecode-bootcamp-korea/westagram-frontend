/*
<구현기능>
id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요. 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!
<추가 구현 기능>
현재 id, pw 입력 시 부조건 로그인 버튼이 활성화 외어 있도록 구현이 되어 있습니다.
실제 로그인 하는 경우를 생각하며 validation(유효성 검사) 기능을 추가해주세요.
ex) id >>> '@' 포함 / pw >>> 5글자 이상*/


const login = document.querySelector('#id');
const password = document.querySelector('#password');
const loginbtn = document.querySelector('.loginbtn');

function activate(){
  if(login.value && password.value && login.value.includes('@') && password.value.length >= 5){
    loginbtn.disabled = false;
    loginbtn.style.backgroundColor="#0195f7"
  }else {
    loginbtn.disabled = true;
    loginbtn.style.backgroundColor="#c4e1fb"
  }
}

login.addEventListener('keyup', activate);
password.addEventListener('keyup', activate);


