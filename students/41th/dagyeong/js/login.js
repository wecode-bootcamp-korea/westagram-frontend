// id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요. 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!

const loginId = document.querySelector(".login_id");
const loginPw = document.querySelector(".login_pw");
const loginBtn = document.getElementById("#login_btn");
// const input = document.querySelector(".login_btn");

function handleBtn() {
  if (loginId.vlaue && loginPw.vlaue) {
    loginBtn.disabled = false;
    // loginBtn.style.backgroundColor = "red";
    console.log("hi");
  } else {
    loginBtn.disabled = true;
  }
}

handleBtn();

// const hadleBtn = () => {
//   const input = document.querySelector(".loginBtn");
//   input.onclick = handle;
// };
// function helllo() {
//   alert(안녕하세요);
// }
