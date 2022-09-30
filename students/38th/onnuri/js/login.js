const emailBox = document.querySelector('.input_email');
const pwBox = document.querySelector('.input_pw');
const loginBtn = document.querySelector('.login_btn');
const form = document.querySelector('.input_container');

//이벤트 위임 + 이벤트 버블링, 캡쳐링

function idValidation (){
  return emailBox.value.includes('@');
}
function pwvalidation (){
  return pwBox.value.length >= 5 ? true : false;
}
console.log(pwvalidation);
// window.addEventListener('keyup', () => {
  
//   let idvalidation = emailBox.value.includes('@');
//   let pwvalidation = pwBox.value.length;
  
//   if(idvalidation && pwvalidation >= 5){
//     loginBtn.style.backgroundColor = "#0095f6";
//     loginBtn.disabled = false;
//     loginBtn.style.cursor = "pointer";
//   }
// })

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(emailBox.value.includes(" ") || pwBox.value.includes(" ")){
    emailBox.value = emailBox.value.replace(/(\s*)/g,'');
    pwBox.value = pwBox.value.replace(/(\s*)/g,'');
  }
  location.href = "main.html";

})

// 함수를 하는 행동 별로 나눠서 쓰는게 좋다
// const init = () => {
//   form.addEventListener('input' ,handleInput);
//   form.addEventListener('keyup', handleInput);
//   loginBtn.addEventListener('click',success);
// }

//keyup :누르고 뗐을때 (딜레이가 없다)
//keydown :누르기 시작했을때 
//keypress :누르는 동안
//input :붙여넣기도 인식됨

