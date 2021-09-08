const button = document.getElementById('login-button');
const idIn = document.getElementById('id-email');
const passwordIn = document.getElementById('password');


function login() {
  const id= idIn.value
  const password = passwordIn.value
  if (id && password) {
    button.classList.remove("button-off")
  } else {
    button.classList.add("button-off")
  }
}


passwordIn.addEventListener('keyup',login)
idIn.addEventListener('keyup',login)

