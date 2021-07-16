// #0096f6

const userName = document.querySelector('.userName');
const passWord = document.querySelector('.passWord');
const loginBtn = document.querySelector('.loginBtn');


userName.addEventListener('keyup',inputValue);
passWord.addEventListener('keyup',inputValue);


function inputValue(){
  loginBtn.classList.add("active");

  const userNameLength = userName.value.length;
  const passWordLength = passWord.value.length;
  
  if((userNameLength||passWordLength)===0)
  {
    loginBtn.classList.remove("active");
  }
}



// function inputValue() {
//   const hasClass = loginBtn.classList.contains("active");
//   if(userName||passWord){
//   loginBtn.classList.add("active");
//   }
//   if(hasClass){
//   loginBtn.classList.remove("active");
//   }
// }

// //input.value값이 필요할 것이라고 생각했는데 그냥 input만 조건으로 줘도 
// 함수가 먹힌다. 왜지? keyup이벤트가 일어나면 함수가 호출되기때문에!



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
  






