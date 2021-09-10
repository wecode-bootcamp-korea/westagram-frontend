const isId = document.getElementById('userId');
const isPw = document.getElementById('userPw');
const letsLogin = document.getElementById('btnLogin');

isId.addEventListener('keyup',activeBtn)
isPw.addEventListener('keyup',activeBtn)

function activeBtn(){
 
  if (0 < isId.value.length && 0 < isPw.value.length){
    letsLogin.classList.add('active');
  } else {
    letsLogin.classList.remove('active');
  }
}

