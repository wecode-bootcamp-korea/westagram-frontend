'use strict';

const idInput = document.getElementById('login_id'),
  pwInput = document.getElementById('login_pw');
const loginBtn = document.getElementById('login_btn');


const isActiveLogin = () => {
  let idValue = idInput.value;
  let pwValue = pwInput.value;

  // (idValue && pwValue) && (pwValue.length > 4) ? loginBtn.classList.add('login_active'): loginBtn.classList.remove('login_active');

  if(
      (idValue && pwValue) && 
      (pwValue.length >= 5) && 
      (idValue.includes('@') || idValue.length >= 5)
      ) {
      loginBtn.disabled = false;
      loginBtn.style.opacity = 1;
      loginBtn.style.cursor = 'pointer';
  }
  else {
      loginBtn.disabled = true;
      loginBtn.style.opacity = .3;
  }
}

const init = () => {
  idInput.addEventListener('input', isActiveLogin);
  pwInput.addEventListener('input', isActiveLogin);
  idInput.addEventListener('keyup', isActiveLogin);
  pwInput.addEventListener('keyup', isActiveLogin);
}

init();