const loginBtn = document.getElementsByClassName('login-btn')[0];

document.getElementById('user-id').addEventListener('keyup', (e) => {
  const userId = document.getElementById('user-id').value;
  const userPw = document.getElementById('user-pw').value;

  if (userId && userPw) {
    loginBtn.classList.add('actived');
    if (e.code === "Enter") {
      success();
    }
  } else {
    loginBtn.classList.remove('actived');
  }
});

document.getElementById('user-pw').addEventListener('keyup', (e) => {
  const userId = document.getElementById('user-id').value;
  const userPw = document.getElementById('user-pw').value;

  if (userId && userPw) {
    loginBtn.classList.add('actived');
    if (e.code === "Enter") {
      success();
    }
  } else {
    loginBtn.classList.remove('actived');
  }
});

loginBtn.addEventListener('click', e => {
  success();
});

function success() {
  alert("환영합니다");
  location.href = "./main.html";
}