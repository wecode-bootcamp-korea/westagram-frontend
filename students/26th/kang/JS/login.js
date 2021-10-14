'use strict';

const thisIsBtn = document.getElementById('login-btn');
const thisIsGuest = document.getElementById('guest');
const thisIsId = document.getElementById('idBox');
const thisIsPw = document.getElementById('pwBox');

function controlColor() {
  const idValue = document.getElementById('idBox').value;
  const pwValue = document.getElementById('pwBox').value;

  console.log('idValue', idValue);
  console.log('pwValue', pwValue);

  const condition = idValue === '' && pwValue === '';
  console.log(condition);

  condition ? (thisIsBtn.style.background = '#7acaff') : (thisIsBtn.style.background = '#0095F6');
}
thisIsId.addEventListener('keyup', controlColor);
thisIsPw.addEventListener('keyup', controlColor);
