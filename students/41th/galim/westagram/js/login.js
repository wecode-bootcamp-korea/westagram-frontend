const userId = document.querySelector('.login__id');
const userPw = document.querySelector('.login__pw');
const loginBtn = document.querySelector('#login__btn');


function inputValue(){
  loginBtn.classList.add("active");

  // if((userId.value.length && userPw.value.length) === 0){
  //   loginBtn.classList.remove("active");
  // }else{
  //   loginBtn.classList.add("active");
  // }

  // 삼항연산자
  (userId.value.length && userPw.value.length) === 0 ? loginBtn.classList.remove("active") : loginBtn.classList.add("active");
}

userId.addEventListener('keyup', inputValue);
userPw.addEventListener('keyup', inputValue);