'use strict';
const id = document.getElementById('id');
const pw = document.getElementById('password');
const submit = document.getElementById('submit');
const checkIdPw = () => {
  id.value.includes('@') > 0 && pw.value.length >= 5
    ? (submit.disabled = false)
    : (submit.disabled = true);
};
id.addEventListener('keyup', checkIdPw);
pw.addEventListener('keyup', checkIdPw);
