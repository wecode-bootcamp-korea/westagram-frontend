const userId = document.querySelector('.id');
const userPassword = document.querySelector('.password');
const loginButton = document.querySelector('.loginButton');

//id/password에 한 글자 이상 입력 시, 버튼 활성화 
// id/password가 공백일 때는 버튼 비활성화 
userPassword.addEventListener('keyup', function () {
  //현재 keyup만 되는 상태
  const userIdValue = userId.value;
  const userPasswordValue = userPassword.value;
  if (userIdValue !== "") {
    if (userPasswordValue !== "") {
      loginButton.style.backgroundColor = "blue";
    }
  } else {
  }
});


//로그인 성공 시, 페이지 이동

userPassword.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    alert('로그인에 성공하셨습니다.')
    document.querySelector('.id').value = '';
    location.href = "main.html";
  }
});

loginButton.addEventListener('click', function () {
  alert('로그인에 성공하셨습니다.')
  document.querySelector('.id').value = '';
  location.href = "main.html";
});