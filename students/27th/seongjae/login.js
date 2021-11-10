const idInput = document.querySelector(".login-box-child-id-input");
const passwordInput = document.querySelector(
  ".login-box-child-passsword-input"
);
const $button = document.querySelector(".login-box-child-btn button");

let handleIdInput;
let handlepasswordInput;

idInput.addEventListener("keyup", (e) => {
  handleIdInput = e.target.value;
});

passwordInput.addEventListener("keyup", (e) => {
  handlepasswordInput = e.target.value;

  if (handleIdInput !== "" && handlepasswordInput !== "") {
    $button.style.backgroundColor = "#0095F6";
  } else {
    $button.style.backgroundColor = "#c4e1fb";
  }
});

$button.addEventListener("click", () => {
  if (handleIdInput.length > 8 && handlepasswordInput.length >= 1) {
    location.href = "main.html";
  } else {
    alert("아이디를 8자리이상 혹은 비밀번호를 입력해주세요.");
  }
});

//color: #0095F6
