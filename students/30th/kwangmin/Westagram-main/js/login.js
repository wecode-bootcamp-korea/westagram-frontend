const idInput = document.getElementById("loginId");
const pwInput = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginButton");


const isActiveLogin = () => {
  let idValue = idInput.value;
  let pwValue = pwInput.value;

  if(
      (idValue && pwValue) && 
      (pwValue.length >= 5) && 
      (idValue.includes("@") || idValue.length >= 5)
      ) {
      loginBtn.disabled = false;
      loginBtn.style.opacity = 1;
      loginBtn.style.cursor = "pointer";
  }
  else {
      loginBtn.disabled = true;
      loginBtn.style.opacity = .3;
  }
}

const init = () => {
  idInput.addEventListener("input", isActiveLogin);
  pwInput.addEventListener("input", isActiveLogin);
  idInput.addEventListener("keyup", isActiveLogin);
  pwInput.addEventListener("keyup", isActiveLogin);
}

init();