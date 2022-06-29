

const id = document.getElementById('id');
const pw = document.getElementById('pw');
const submit = document.getElementById('submit');

const checkIdPw = () => {
  id.value.includes('@') > 0 && pw.value.length >= 6
    ? (submit.disabled = false)
    : (submit.disabled = true);
  submit.style.cursor = 'pointer';  
};



id.addEventListener('keyup', checkIdPw);
pw.addEventListener('keyup', checkIdPw);
