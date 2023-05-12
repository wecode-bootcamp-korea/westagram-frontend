const idForm = document.querySelector(".inputId");
const pwForm = document.querySelector(".inputPw");
const loginBtn = document.querySelector(".disabled");

function checkInput() {
  const idValue = idForm.value;
  const pwValue = pwForm.value;

  const isValidId = idValue.includes("@");
  const isValidPw = pwValue.length >= 5;

  if (isValidId && isValidPw) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#0092f3";
    // loginBtn.classList.remove("disabled");
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#c4e1fb";
    // loginBtn.classList.add("disabled");
  }
}

idForm.addEventListener("keyup", checkInput);
pwForm.addEventListener("keyup", checkInput);

/*let isEmailValid = idForm.value.includes("@");

isEmailValid ? 

function ableEmailPw (){
  if (idForm.includes('@') && pwForm.length > 4) {


  }
}*/
