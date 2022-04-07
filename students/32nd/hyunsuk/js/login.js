const lgForm = document.querySelector("form");
const inputId = document.querySelector("#id");
const inputPw = document.querySelector("#password");
const loginBtn = document.querySelector("button");

const handleKeyup = () => {
  const idValue = inputId.value;
  const pwValue = inputPw.value;
  if (idValue && pwValue) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "blue";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#c0dffd";
  }
};

lgForm.addEventListener("keyup", handleKeyup);
