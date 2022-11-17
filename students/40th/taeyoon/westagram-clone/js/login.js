const inputId = document.querySelector('.input__id');
const inputPw = document.querySelector('.input__pw');
const inputBtn = document.querySelector('.login__form--btn')

console.log(inputId.value);
console.log(inputPw.value);
console.log(inputBtn)


function validate(){
  // !(입력값이 둘다 있을 경우) - 버튼 비활성화
  if(!(inputId.value && inputPw.value)) {
    inputBtn.disabled = true;
    inputBtn.style.backgroundColor = "#C5E1FC";
  // 입력값이 둘다 있을 경우 - 버튼 활성화
  } else {
    inputBtn.disabled = false;
    inputBtn.style.backgroundColor = "royalblue";
    inputBtn.style.cursor = 'pointer';
  }
}

inputId.addEventListener('keyup', validate);
inputPw.addEventListener('keyup', validate);