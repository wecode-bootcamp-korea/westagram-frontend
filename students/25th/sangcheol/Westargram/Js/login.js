const idInput = document.getElementsByClassName("input-box_login")[0];
const passwordInput = document.getElementsByClassName("input-box_password")[0];
const inputBtn = document.getElementsByClassName('btnon')[0];

function onBtn () {
  const id = idInput.value;
  const password = passwordInput.value;
  
  if (id && password) {
    inputBtn.classList.remove('off-button');
  }else {
    inputBtn.classList.add('off-button');

  }
};
idInput.addEventListener("keyup" ,onBtn);
passwordInput.addEventListener("keyup", onBtn);
