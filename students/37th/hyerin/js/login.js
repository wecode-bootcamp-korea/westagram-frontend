const $inputId = document.getElementById("input-id");
const $inputPw = document.getElementById("input-pw");
const $btnLogin = document.getElementById("btn-login");
const $formLogin = document.querySelector("form-login");
let checkId = false;
let checkPw = false;

const activateButton = function () {
  $btnLogin.style.backgroundColor = "rgb(0, 149, 246, 1)";
  $btnLogin.disabled = false;
  $btnLogin.classList.add("btn-hoverEffect");
};

const disabledButton = function () {
  $btnLogin.style.backgroundColor = "rgb(0, 149, 246, 0.3)";
  $btnLogin.disabled = true;
  $btnLogin.classList.remove("btn-hoverEffect");
};

const checkLength = function () {
  if ($inputId.value.length > 0 && $inputPw.value.length > 0) {
    activateButton();
  } else {
    disabledButton();
  }
};

const idValidation = function () {
  const $emailErrorMessage = document.querySelector(".message-emailError");
  if (!$inputId.value.includes("@")) {
    $emailErrorMessage.style.display = "inline-block";
    checkId = false;
  } else {
    $emailErrorMessage.style.display = "none";
    checkId = true;
  }
};

const pwValidation = function () {
  const $pwErrorMessage = document.querySelector(".message-pwError");
  if ($inputPw.value.length < 5) {
    $pwErrorMessage.style.display = "inline-block";
    checkPw = false;
    disabledButton();
  } else {
    $pwErrorMessage.style.display = "none";
    checkPw = true;
    activateButton();
  }
};

const submitLogin = function (e) {
  e.preventDefault();
  if (checkId === true && checkPw === true) {
    $inputId.value = "";
    $inputPw.value = "";
  }
};

$inputId.addEventListener("keyup", checkLength);
$inputPw.addEventListener("keyup", checkLength);
$inputId.addEventListener("change", idValidation);
$inputPw.addEventListener("change", pwValidation);
$btnLogin.addEventListener("click", submitLogin);
