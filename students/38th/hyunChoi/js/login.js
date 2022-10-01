//  1. 로그인 버튼 on
//  2. 로그인 버튼 off
//  3. 로그인 성공시 main.html로 이동하는 이벤트 
//  4. 로그인 유효성 검사

const inputId = document.querySelector('#id');
const inputPassword = document.querySelector('#password');
const loginInput = document.getElementsByClassName('LogInInput')
const button = document.querySelector('#LogInButton');

function loginButtonOn() {
    // let idValu = inputId.value;
    // let passwordValue = inputPassword.value;

    button.disabled = false;
    button.style.backgroundColor = '#3e3efe';
    button.style.cursor = 'pointer';

};

function loginButtonOff() {
    // let idValu = inputId.value;
    // let passwordValue = inputPassword.value;

    button.disabled = true;
    button.style.backgroundColor = '#3ecefe';

};

function successLogin(){
    let idValu = inputId.value;
    let passwordValue = inputPassword.value;
    if(idValu.length > 0 && passwordValue.length > 0 ){
        loginButtonOn()
    }else{
        loginButtonOff()
    }
}
function eneterKeyLogin(event){
    if (event.keyCode == 13){
        
    }
}

function loginValidation(){
  console.log(inputId.value)
  console.log(inputPassword.value)
  if(inputId.value.indexOf('@') > -1 && inputPassword.value.length > 5){
    location.href='main.html'
  }else{
    alert("ID와 PASSWORD를 올바르게 입력해주세요.")
    inputId.value = ""
    inputPassword.value = ""
  }
}


inputId.addEventListener('keyup', successLogin);
inputPassword.addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        loginValidation()
    }else{
        successLogin()
    }
});
button.addEventListener('click', (event) => {loginValidation(event)})
