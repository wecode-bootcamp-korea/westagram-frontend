thisIsPw.addEventListener('keyup', function() { //키업을 했을때, 함수를 실행시킨다.
    const passwordValue = document.querySelector('#password').value;
    const rePasswordValue = document.querySelector('#re-password').value;
    const pTagAlert = document.querySelector('.alert');
  
    if (passwordValue !== rePasswordValue) {
      pTagAlert.innerHTML = '비밀번호가 일치하지 않습니다'
    } 
    if (passwordValue === rePasswordValue) {
      pTagAlert.innerHTML = ''  
    }
  });