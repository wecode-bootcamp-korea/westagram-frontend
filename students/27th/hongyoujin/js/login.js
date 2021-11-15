"use strict";

// 1. Id 입력 value를 받는다 -> 옳은지(조건이 맞는지) 검사한다 (조건 맞으면 return)
// 2. pw 입력 value를 받는다 -> 옳은지(조건이 맞는지) 검사한다 (조건 맞으면 return)
// 3. 1,2이 모두 통과되면 -> 로그인 버튼을 ‘활성화’시킨다 (1,2 둘다 조건 맞으면 event)
// 4. 로그인 버튼을 클릭하면 다음 페이지로 ‘넘어가게’ 한다 (event)

(function () {
  const userName = document.getElementById("id");
  const password = document.getElementById("password");

  const form = document.getElementById("form");
  const loginBtn = document.querySelector(".login_button");

  // 1. id, pw 값이 input --> 버튼 disabled 해제 + 버튼 backgroundColor + cursor
  // 2. 유효성 검사
  // 3. 버튼 누르면 href로 다음페이지 연결

  function enabledBtn() {
    //유효성 검사

    const userNameValue = userName.value;
    const passwordValue = password.value;

    // const isUserNameInvalid = userName.value.includes("@");
    const isUserNameInvalid =
      userNameValue.trim().length > 0 && userName.value.includes("@");
    const isPasswordInvalid = passwordValue.trim().length > 4;

    if (isUserNameInvalid === true && isPasswordInvalid === true) {
      loginBtn.disabled = false;
      loginBtn.style.backgroundColor = "rgb(0, 147, 245)";
      loginBtn.style.cursor = "pointer";
    } else {
      loginBtn.disabled = true;
      loginBtn.style.backgroundColor = "rgba(0, 147, 245, 0.3)";
      loginBtn.style.cursor = "inherit";
    }
  }
  userName.addEventListener("input", enabledBtn);
  password.addEventListener("input", enabledBtn);

  function goToMain(event) {
    event.preventDefault();

    location.href = "main.html";
    // location.replace("main.html");
  }

  form.addEventListener("submit", goToMain);
})();
