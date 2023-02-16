// //- id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.  원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!
// // &&함수 사용
// //1. dom으로 각 input의 value값에 접근하여 변수 선언하기
// //2. id value값이 한 글자 이상이다 && pw 값이 한글자 이상이다
// //addEventLisner 작동

// const loginId = document.getElementById("id")[0];
// const loginPassword = document.getElementById("password")[0];
// const loginButton = document.getElementById("button")[0];
// const loginInfo = document.getElementById("loginIdPw");

// loginIdPw.addEventLisner("keyup", function(){
//   //아이디와 비밀번호 입력 값
//   let idvalue = loginId.value;
//   let pwvalue = loginPassword.value;

//   if(idvalue !== "" && pwvalue !== "") {
//     loginButton.classList.add(loginButton.blue);
//   } else {
//     loginButton.classList.remove(loginButton.blue);
//   }
// })