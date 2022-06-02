const thisIsId = document.getElementById('userID');
const thisIsPw = document.getElementById('userPW');
const loginBtn = document.getElementById('loginBtn');

thisIsPw.addEventListener('keyup', function() {
  const thisIsIdVal = document.getElementById('userID').value;
  const thisIsPwVal = document.getElementById('userPW').value;

  if(thisIsIdVal.includes('@')){
    loginBtn.style.backgroundColor = '#0095f6'
    //location.href="main.html"
  } else {
    alert('아이디를 확인해주세요.');
    loginBtn.style.backgroundColor = 'rgba(0,149,246,.3)'
  }

  if(thisIsPwVal.length >= 5){
    loginBtn.style.backgroundColor = '#0095f6'
    //location.href="main.html"
  } else {
    alert('비밀번호를 확인해주세요.');
    loginBtn.style.backgroundColor = 'rgba(0,149,246,.3)'

  }
});
