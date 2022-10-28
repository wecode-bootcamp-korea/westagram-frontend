const thisIsId = document.querySelector("#id-input");
const thisIsPassword = document.querySelector("#password-input");
const thisIsLoginBtn = document.querySelector(".login-btn");

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
}

thisIsId.addEventListener("keyup", handleClick);
