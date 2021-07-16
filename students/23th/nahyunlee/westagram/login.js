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
  }
});

//Id, Password Validation
userId.addEventListener('keyup', function (e) {
  if (e.code === 'Enter' || e.key === 'Tab') {
    //1. id value 값을 변수에 넣는다. 
    const userIdValue = userId.value;
    //2. @가 들어가 있는지 확인하는 메서드를 변수에 넣는다.
    const indexOfUserID = userIdValue.indexOf('@');
    //3. @가 들어있지 않다면(indexOf에 값이 없으면 -1이 나옴), 경고창을 만든다. 
    if (indexOfUserID === -1) {
      alert('@를 입력해주세요.')
    }
    //}
  }
})






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

