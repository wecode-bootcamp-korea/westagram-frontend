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
  if (handleIdInput.includes("@") === true && handlepasswordInput.length >= 5) {
    location.href = "main.html";
  } else {
    alert("아이디에 '@'를 포함하시거나, 비밀번호를 5자리 이상 입력해주세요.");
  }
});

//color: #0095F6
