const inputContainer = document.querySelector("inputContainer");

inputContainer.addEventListener("keyup", (e) => {
  const btn = document.querySelector("btn");
  const inputIdVal = document.querySelector(".inputId").value;
  const inputPwVal = document.querySelector(".inputPw").value;
  if (inputIdValength && inputPwVal.length >= 3) {
    btn.style.backgroundColor = "#0095F6";
  } else if (!inputIdVal || inputPwVal.length < 3) {
    btn.style.backgroundColor = "#b2dffc";
  }
});
// function wrongAlert() {
//   alert('잘못된 비밀번호입니다. 다시 확인하세요.')
// }
