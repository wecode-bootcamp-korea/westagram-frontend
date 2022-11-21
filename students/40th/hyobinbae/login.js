const getInput = document.getElementsByClassName("inputBox")[0];
const loginBtn = document.getElementById("button");

const ID = document.querySelector(".id");
const PW = document.querySelector(".pw");

//1. inputBox에 들어온 값이 유효한지
//2. ID 값이 @를 포함하면서 길이는 5 이상인지, PW 도

function activateBtn(isBtnValid) {
  loginBtn.disabled = isBtnValid ? false : true;
  loginBtn.style.opacity = isBtnValid ? 1 : 0.5;
  loginBtn.style.cursor = isBtnValid ? "pointer" : "default";
}

function checkId(value) {
  if (value.includes("@") && value.length >= 5) {
    return true;
  } else {
    return false;
  }
}

function checkPw(value) {
  if (value.length >= 5) {
    return true;
  } else {
    return false;
  }
}

function handleInput() {
  const idValue = document.getElementById("id").value;
  const pwValue = document.getElementById("pw").value;

  const isValidId = checkId(idValue);
  const isValidPw = checkPw(pwValue);

  if (isValidId && isValidPw) {
    activateBtn(true);
  } else {
    activateBtn(false);
  }
}

function success() {
  alert("Welcome!");
  location.href = "/westagram.html";
}

const loginFull = () => {
  getInput.addEventListener("keyup", handleInput);
  getInput.addEventListener("input", handleInput);
  loginBtn.addEventListener("click", success);
};

loginFull();
