const inputId = document.getElementsByClassName("inputId")[0];
const inputPwd = document.getElementsByClassName("inputPwd")[0];
const inputWrapper = document.getElementsByClassName("inputWrap")[0];

const button = document.querySelector(".loginButton");

const goToMain = () => {
  location.href = "main.html";
};
button.addEventListener("click", goToMain);

const handleBtn = (e) => {
  if (e.code === "Space") {
    e.preventDefault();
  }
  const inputIdVal = inputId.value;
  const inputPwdVal = inputPwd.value;

  if (inputIdVal.length !== 0 && inputPwdVal.length !== 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

inputWrapper.addEventListener("keydown", handleBtn);
inputWrapper.addEventListener("keyup", handleBtn);
