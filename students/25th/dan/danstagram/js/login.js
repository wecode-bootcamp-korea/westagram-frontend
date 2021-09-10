const isId = document.getElementById('user_id');
const isPw = document.getElementById('user_pw');
const letsLogin = document.getElementById('btn_login');
const isInput = document.getElementsByTagName('input')[0]

isId.addEventListener('keyup',activeBtn)
isPw.addEventListener('keyup',activeBtn)

console.log(isInput)

function activeBtn(){
 
  if (0 < isId.value.length && 0 < isPw.value.length){
    letsLogin.classList.add('active');
  } else {
    letsLogin.classList.remove('active');
  }
}

