const button = document.getElementById('login-button');
const idIn = document.getElementById('id-email');
const passwordIn = document.getElementById('password');


function login() {
  const id= idIn.value
  const password = passwordIn.value
  if (id && password) {
    button.classList.remove("button-off")
    button.disabled = false;
    } else {
    button.classList.add("button-off")
    button.disabled = true;
  }
}

  function enter(e) {
    if(e.keyCode == 13) {
      button.click();
    }
  }

passwordIn.addEventListener('keyup',login);
idIn.addEventListener('keyup',login);
passwordIn.addEventListener('keypress',enter);
idIn.addEventListener('keypress',enter);