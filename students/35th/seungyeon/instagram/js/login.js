const activeLogin = document.getElementById('login-btn');
const id = document.getElementById('id');
const pw = document.getElementById('pw');

//id와 pw에 한글자 이상 쳐야 활성화 & 링크 이동
id.addEventListener('keyup', function() {
   const inputId = id.value;
   const inputPw = pw.value;

   if (inputId.length > 0 && inputPw.length > 0) {
      activeLogin.classList.add('active');
      activeLogin.disabled = false;
   } else {
      activeLogin.classList.remove('active');
      activeLogin.disabled = true;
   }
})

pw.addEventListener('keyup', function() {
   const inputId = id.value;
   const inputPw = pw.value;

   if (inputId.length > 0 && inputPw.length > 0) {
      activeLogin.classList.add('active');
      activeLogin.disabled = false;
   } else {
      activeLogin.classList.remove('active');
      activeLogin.disabled = true;
   }
})

activeLogin.addEventListener('click', function(){
   location.href = "/main.html";
})