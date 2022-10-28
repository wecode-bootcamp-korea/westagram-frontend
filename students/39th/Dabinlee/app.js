const thisIsId = document.querySelector("#id-input");
const thisIsPassword = document.querySelector("#password-input");
const thisIsLoginBtn = document.querySelector(".login-btn");

console.log(thisIsId);
console.log(thisIsPassword);
console.log(thisIsLoginBtn);

function activeButton() {
  thisIsLoginBtn.classList.remove("button_a");
  thisIsLoginBtn.classList.add("active");
  thisIsLoginBtn.disabled = false;
}
function inactiveButton() {
  thisIsLoginBtn.classList.remove("active");
  thisIsLoginBtn.classList.add("button_a");
  thisIsLoginBtn.disabled = true;
}

function handleClick(event) {
  const inputID = document.querySelector("#id-input").value;
  const inputPW = document.querySelector("#password-input").value;
  console.log(inputID, inputPW);

  const isValid = inputID.length >= 1 && inputPW.length >= 8;

  isValid ? activeButton() : inactiveButton();

  // if (inputID.length >= 1 && inputPW.length >= 8) {
  //   thisIsLoginBtn.classList.remove("button_a");
  //   thisIsLoginBtn.classList.add("active");
  //   thisIsLoginBtn.disabled = false;
  // } else {
  //   thisIsLoginBtn.classList.remove("active");
  //   thisIsLoginBtn.classList.add("button_a");
  //   thisIsLoginBtn.disabled = true;
  // }
}

thisIsId.addEventListener("keyup", handleClick);

//
// function handleClick(){
//   (inputID.length >= 1 && inputPW.length >= 8) ? true : false
// }

//질문 1. 위의 코드에 오류가 있습니다. 조건문에 문제가 있ㅡㄴ것 같ㅏㅛ
//질문 2. 삼항연산자를 위의 경우에(조건이랑 기능이 한ㅐ이상임)
//질문 3. 깃허브에 푸ㅣ가 되 않ㅡㄴ다 . This branch is 2 commits ahead, 2 commits behind master.
