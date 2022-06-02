// 로그인창 색 변화 구현
// function changeColor() {
//   let idInput = document.querySelector(".login_id");
//   let pwInput = document.querySelector(".login_pw");
//   let loginBtn = document.querySelector(".login_btn");
//   if (idInput.value === "" && pwInput.value === "") {
//     loginBtn.style.backgroundColor = "#bddbf9";
//   } else {
//     loginBtn.style.backgroundColor = "#0989f1";
//   }
// }
const idInput = document.querySelector(".login_id");
const pwInput = document.querySelector(".login_pw");
const loginBtn = document.querySelector(".login_btn");

const changeColor = () => {
  // idInput.value && pwInput.value
  //   ? (loginBtn.style.backgroundColor = "#0989f1")
  //   : (loginBtn.style.backgroundColor = "#bddbf9");
  // if (idInput.value.includes("@") && pwInput.value.length > 4) {
  //   loginBtn.style.backgroundColor = "#0989f1";
  // } else {
  //   loginBtn.style.backgroundColor = "#bddbf9";
  // }
  // Mission 5. ID, PW validation 기능 구현 (추후 toMainPage연산 재정립 필요)
  idInput.value.includes("@") && pwInput.value.length > 4
    ? (loginBtn.style.backgroundColor = "#0989f1")
    : (loginBtn.style.backgroundColor = "#bddbf9");
};

// Mission 2. 로그인 버튼 활성화기능
// 로그인 요건 충족시 main페이지로 넘어가는 기능 구현
// 추후 삼항연산자로 리팩토링 필요
const toMainPage = () => {
  if (idInput.value !== idInput.value) {
    // loginBtn.preventDefault();
    loginBtn.disabled = true;
  } else if ((idInput.value > 0 && pwInput.value > 0) && (idInput.value === pwInput.value)) {
    location.href = "./main.html";
  }
};
