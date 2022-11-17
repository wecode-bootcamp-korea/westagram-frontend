const inputId = document.getElementById("input_id");
const inputPwd = document.getElementById("input_pwd");
const loginButton = document.getElementById("login_btn");
console.log(inputId);
console.log(inputPwd);
console.log(loginButton);

const validate = () => {
  let idValue = inputId.value;
  let pwValue = inputPwd.value;

  if (idValue && pwValue) {
    loginButton.disabled = false;
    loginButton.style.opacity = 1;
    loginButton.style.cursor = "pointer";
  } else {
    loginButton.disabled = true;
    loginButton.style.opacity = 0.3;
  }
};

inputId.addEventListener("keydown", validate);
inputPwd.addEventListener("keydown", validate);
