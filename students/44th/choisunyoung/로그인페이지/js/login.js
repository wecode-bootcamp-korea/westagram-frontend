//button disable의 값이 false면 활성화됨.
//userId와 userPw 둘의 input에 글씨가 작성되면 버튼이 활성화가 됨.


const contentWrap = document.getElementsByClassName("loginContent-wrap");
const loginButton = document.getElementById("login-button");
const userId = document.getElementsByid("user-id");
const userPw = document.getElementsByid("user-pw");

userId.addEventListener('keydown', buttonEvent());
userPw.addEventListener('keydown', buttonEvent());

function buttonEvent(){
  if(userId.value && userPw.value){
    loginButton.disabled = false;
    loginButton.className += 'keydown';
  } else {
    loginButton.disabled = true;
  }
};


// contentWrap.keydownEvent('keydown', function(){
//   let userId = true;
//   let userPw = true;
//   if(userId.value && userPw.value){
//     userId.value = false;
//     userPw.value = false;
//   } 
// })
// function keydownEvent(){
//   contentWrap.addEventListener('keydown', function(){
//     if(userId.value && userPw.value){
//       userId.disable = false;
//       userPw.disable = false;
//     } else {
//       userId.disable = true;
//       userPw.disable = true;
//     }
//   })
// }
// keydownEvent();