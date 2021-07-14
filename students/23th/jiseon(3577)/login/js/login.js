// #0096f6

const userName = document.querySelector('.userName');
const passWord = document.querySelector('.passWord');
const loginBtn = document.querySelector('.loginBtn');


userName.addEventListener('keyup',inputValue);
passWord.addEventListener('keyup',inputValue);


function inputValue() {
  const hasClass = loginBtn.classList.contains("active");
  if(userName||passWord){
  loginBtn.classList.add("active");
  }
  if(hasClass){
  loginBtn.classList.remove("active");
  }
}

//input.value값이 필요할 것이라고 생각했는데 그냥 input만 조건으로 줘도 
// 함수가 먹힌다. 왜지? 



// function plusUserName(){
// const hasClass = loginBtn.classList.contains("active");
//   if(userName){
//   loginBtn.classList.add("active");
//   }
//   if(hasClass){
//   loginBtn.classList.remove("active");
//   }
// }


// function plusPassword(){
//   const hasClass = loginBtn.classList.contains("active");
//     if(passWord){
//     loginBtn.classList.add("active");
//     }
//     if(hasClass){
//     loginBtn.classList.remove("active");
//     }
//   }
  






