const thisIsId = document.querySelector("#id");
const thisIsPassword = document.querySelector("#password");
const thisIsLoginBtn = document.querySelector(".login_btn");
const thisIsLoginForm = document.querySelector(".login_form");

function inputCheck(event) {
  event.preventDefault();
  const id = thisIsId.value;
  const password = thisIsPassword.value;

  id && password
    ? thisIsLoginBtn.classList.add("active")
    : thisIsLoginBtn.classList.remove("active");
}

thisIsId.addEventListener("keyup", inputCheck);
thisIsPassword.addEventListener("keyup", inputCheck);

function isValidIdPw(event) {
  event.preventDefault();
  const id = event.target[0].value;
  const password = event.target[1].value;

  if (id.includes("@")) {
    if (password.length >= 5) {
      window.open("main.html");
    } else {
      alert("비밀번호를 확인하세요");
    }
  } else {
    alert("이메일 주소를 입력하세요");
  }

  event.target[0].value = "";
  event.target[1].value = "";
}

thisIsLoginForm.addEventListener("submit", isValidIdPw);
