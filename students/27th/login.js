const inputId = document.querySelector('.id');

function activeLogin() {
  inputId.style.backgroundColor = "blue";
}

inputId.addEventListener('keyup', activeLogin);

/*
inputId.addEventListener('keyup', activeLogin)
inputPassword.addEventListener('keyup', activeLogin)

function activeLogin () {
  let id = inputId.value;
  let password = inputPassword.value;

  if ((id.length >= 1) && (password.length >= 1)) {
    btn.style.backgroundColor = "rgb(250, 250, 250"
  } else {
    btn.style.backgroundColor = "#FAFAFA"
  }
}
*/

/*
let inputId = document.querySelector('.id');
let inputPassword = document.querySelector('.password');
let activeBtn = document.querySelector('.btn');


inputId.addEventListener('keyup', function () {
  activeBtn.style.backgroundColor = "rgb(250, 250, 250)"
});
*/

/*
document.addEventListener('keyup', function () {
  activeBtn.style.backgroundColor = "rgb(250, 250, 250)"
});
*/

/*
inputId.addEventListner('keyup', activeLogin);
inputPassword.addEventListener('keyup', activeLogin);

function activeLogin() {

  const loginId = inputId.value;
  const loginPassword = inputPassword.value;

  if ((loginId.length >= 1) && (loginPassword.length >= 1)) {
    activeBtn.style.backgroundColor = "rgb(250, 250, 250)"
  } else {
    activeBtn.style.backgroundColor = "#FAFAFA"
  }
};
*/