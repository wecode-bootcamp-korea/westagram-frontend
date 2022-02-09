const logBtn = document.getElementsByClassName("loginButton")[0];
// 문서에서 클래스 이름이 'loginButton"'인 요소 중 가장 상단에 있는 요소 값 가져와서 변수 'logBtn'에 담아라

window.addEventListener("keyup", function () {
  const userIdName = document.getElementsByClassName("userId")[0].value;
  const userPassword = document.getElementsByClassName("userPassword")[0].value;

  console.log("userIdName >>>>", userIdName);

  if (userIdName && userPassword) {
    //변수값이 존재한다면(빈칸이 아니라면)
    logBtn.style.backgroundColor = "blue"; //log_btn버튼 배경색을 파란색으로 바꿔라
  }
});
//윈도우 창에서 키값이 입력되면, 함수를 실행해라.
//doucument.body쓰면 안됨. getELementsByClassName, id가 이미 body를 포함하고 있음.
//함수 밖에서 변수를 선언할 때 value를 붙이면 로딩했을 떄 값이 담김.
// 그래서 밖에서는 vlaue를 작성하면 안됨.
