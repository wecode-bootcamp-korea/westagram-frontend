const userId = document.querySelector('.id');
//const userPassword = document.querySelector('.password');
const loginButton = document.querySelector('.loginButton');

//id/password에 한 글자 이상 입력 시, 버튼 활성화 
// id/password가 공백일 때는 버튼 비활성화 
userId.addEventListener('keyup', function () {
  //현재 keyup만 되는 상태
  const userIdValue = document.querySelector('.id').value;
  const userPasswordValue = document.querySelector('.password').value;
  if (userIdValue === "") {
    return loginButton.style.backgroundColor = "blue";
  } else {
    return loginButton.style.backgroundColor = "blue";
  }
});



//로그인 성공 시, 페이지 이동
loginButton.addEventListener('click', function () {
  location.href = "main.html";
})