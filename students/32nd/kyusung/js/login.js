const login_id = document.getElementById("login_id");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

password.addEventListener("keyup", () => {
  const password_input = password.value;
  if (login_id.value && password_input) {
    submit.disabled = false;
  }
  if (password_input === "") {
    submit.disabled = true;
  }
  console.log(password_input);
});

submit.addEventListener("click", () => {
  if (login_id.value.indexOf("@") === -1) {
    alert("아이디에 @를 포함시키세요");
    login_id.focus();
  } else if (password.value.length < 5) {
    alert("비밀번호를 다시 입력하세요");
    password.focus();
  } else {
    location.href = "./main.html";
  }
});
