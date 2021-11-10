$(".id_input").on("input", checkInput);
$(".password_input").on("input", checkInput);

// input 입력 시에 checkInput 함수실행
function checkInput() {
  var idCheck = $(".id_input").val(); // idCheck 변수
  var passwordCheck = $(".password_input").val(); // idCheck 변수
  var btnLogin = $(".btn_submit");

  if (idCheck === "" || passwordCheck === "") {
    // 기본 로그인 버튼 색상
    btnLogin.removeClass("on");
  } else {
    // ID 비밀번호 입력 시에 로그인 버튼 배경색 변경
    btnLogin.addClass("on");
  }
}
