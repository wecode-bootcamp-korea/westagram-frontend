const loginBtn = document.getElementsByClassName('login-btn')[0];

document.getElementById('user-id').addEventListener('keyup', function() {
  const userId = document.getElementById('user-id').value;
  const userPw = document.getElementById('user-pw').value;

  if (userId && userPw) {
    loginBtn.classList.add('actived');
  } else {
    loginBtn.classList.remove('actived');
  }
});

document.getElementById('user-pw').addEventListener('keyup', function() {
  const userId = document.getElementById('user-id').value;
  const userPw = document.getElementById('user-pw').value;

  if (userId && userPw) {
    loginBtn.classList.add('actived');
  } else {
    loginBtn.classList.remove('actived');
  }
});