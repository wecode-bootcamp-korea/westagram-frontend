const id = document.getElementById('id');
const pw = document.getElementById('pw');
const loginBtn = document.getElementById('loginBtn');

const activeLogin = () => {

  let idValue = id.value;
  let pwValue = pw.value;

  if(pwValue.length >= 5 && idValue.includes('@')) {
    return loginBtn.className = (idValue.length > 0 && pwValue.length > 0 ? 'btnActive' : "btnDefault")
  }
}

id.addEventListener('keyup', activeLogin);
pw.addEventListener('keyup', activeLogin);
