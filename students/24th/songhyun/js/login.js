const userName = document.querySelector('.user-name');
const userPw = document.querySelector('.user-pw');
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (userName.value !== '' && userPw.value !== '') {
    loginBtn.classList.add('active');
  } else {
    loginBtn.classList.remove('active');
  }
});
