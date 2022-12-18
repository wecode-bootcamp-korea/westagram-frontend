const id = document.querySelector(".login_id");
const pw = document.querySelector(".login_pw");
const btn = document.querySelector(".login_btn");
const box = document.querySelector(".login_box");

function input() {
  const idValue = id.value;
  const pwValue = pw.value;

  const isValidId = checkId(idValue);
  const isValidPw = checkPw(pwValue);
  const isAllValid = isValidId && isValidPw;

  handleBtn(isAllValid);

  function checkId(values) {
    const value = id.value;
    console.log(value);
    if (value.includes("@") && value.length > 5) {
      return true;
    } else {
      return false;
    }
  }
}

function checkPw(values) {
  const value = pw.value;
  if (value.length > 0) {
    return true;
  } else {
    return false;
  }
}

function handleBtn(isAllValid) {
  if (isAllValid) {
    btn.disabled = false;
    btn.style.backgroundColor = "blue";
    btn.style.opacity = 1;
    btn.style.cursor = "pointer";
  } else {
    btn.disabled = true;
  }
}

function success() {
  alert("환영합니다.");
  location.href = "http://127.0.0.1:5500/students/41th/dagyeong/main.html";
}

function init() {
  btn.addEventListener("click", success);
  box.addEventListener("keydown", input);
  box.addEventListener("input", input);
}

init();
