const thisIsId = document.getElementById('userID');
const thisIsPw = document.getElementById('userPW');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('input', (e)=> {
  const thisIsPwVal = document.getElementById('userPW').value;
  const thisIsIdVal = document.getElementById('userID').value;
  
  if(thisIsIdVal.includes('@') && thisIsPwVal.length >= 5){
    loginBtn.style.backgroundColor = '#0095f6';
  } 
});
loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const thisIsPwVal = document.getElementById('userPW').value;
    const thisIsIdVal = document.getElementById('userID').value;
    
    if(thisIsIdVal.includes('@') && thisIsPwVal.length >= 5){
      location.href="main.html";
    } else {
      alert('비밀번호를 확인해주세요.');
      loginBtn.style.backgroundColor = 'rgba(0,149,246,.3)';
    }
});
