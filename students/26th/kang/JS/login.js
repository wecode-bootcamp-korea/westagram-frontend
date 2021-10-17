'use strict';

const loginBtn = document.getElementById('login-btn');
const id = document.getElementById('idBox');
const password = document.getElementById('pwBox');
const user = document.getElementById('user');

function loginColor() {
  const idValue = document.getElementById('idBox').value;
  const pwValue = document.getElementById('pwBox').value;
  const userValue = idValue.indexOf('@') !== -1 && pwValue.length >= 5;
  userValue ? (loginBtn.style.opacity = 1) : (loginBtn.style.opacity = 0.3);
}

user.addEventListener('input', loginColor);
