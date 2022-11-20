// input ID element
let loginInputId = document.getElementById("idInput");
// input password element
let loginInputPw = document.getElementById("pwInput");
// login button element
let loginBtnElement = document.getElementById("loginBtn");

// active event - switching button color
window.addEventListener("keyup", () => {
  let loginInputIDField = loginInputId.value;
  let loginInputPWField = loginInputPw.value;
  /// check exist of `@` in input field
  const checkEMail = loginInputIDField.indexOf("@");

  if (loginInputIDField.length > 0 && loginInputPWField.length > 4) {
    if (checkEMail !== -1) {
      loginBtnElement.classList.add("active");
      loginBtnElement.style;
    } else {
      // discard 'active state' when `@` disappeared
      loginBtnElement.classList.remove("active");
    }
  } else {
    // discard 'active state' when password.length is less than 5
    loginBtnElement.classList.remove("active");
  }
});

// click event - pop up alert
loginBtnElement.addEventListener('click', function(e) {
  e.preventDefault();
  let loginInputIDField = loginInputId.value;
  let loginInputPWField = loginInputPw.value;

  const checkEMail = loginInputIDField.indexOf("@");
  if(loginInputIDField.length == 0) {
    alert('사용자 이메일을 입력해주세요.')
  } else if(checkEMail == -1) {
    alert('올바른 이메일을 입력해주세요.')
  } else if(loginInputPWField.length == 0) {
    alert('비밀번호를 입력해주세요.')
  } else if(loginInputPWField.length < 5) {
    alert('비밀번호는 5자 이상입니다. 다시 입력해주세요.')
  } else {
    loginToMainPage();  }
})


const loginToMainPage = () => {
  window.location.href = '/students/40th/woojin/main.html';
}
