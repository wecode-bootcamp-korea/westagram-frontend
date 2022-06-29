// const thisId = document.querySelector(".login-id");
// const thisPwd = document.querySelector(".login-pwd");

// const btn = document.querySelector(".login-btn");

// // const loginActive = () => {
// //   const id = thisId.value;
// //   const pwd = thisPwd.value;
// //   if (id.length > 0 && pwd.length > 0) {
// //     btn.style.opacity = 1;
// //   }
// //   if (id.length <= 0 || pwd.length <= 0) {
// //     btn.style.opacity = 0.35;
// //   }
// // };

// const loginActive = () => {
//   let id = thisId.value;
//   let pwd = thisPwd.value;
//   if (id.length > 1) {
//     btn.disabled = false;
//   }
// };

// const loginButton = () => {
//   let id = thisId.value;
//   let pwd = thisPwd.value;
//   if (id == "youngsu12" && pwd == 1234) {
//     alert("로그인을 성공하였습니다.");
//     window.location = "main.html";
//     return;
//   } else {
//     alert("로그인을 실패하셨습니다.");
//     thisId.value = "";
//     thisPwd.value = "";
//     btn.disabled = true;
//     return;
//   }
// };

// btn.addEventListener("click", loginButton);

// setInterval(loginActive, 1000);

const id = document.querySelector(".login-id");
const pwd = document.querySelector(".login-pwd");
const btn = document.querySelector(".login-btn");
const input = document.querySelector("section");

const loginActive = () => {
  // if (id.value.length > 0 && pwd.value.length > 0) {
  //   return (btn.disabled = false);
  // } else return;

  id.value.length > 0 && pwd.value.length > 0 ? (btn.disabled = false) : 1;
};

const pageMove = () => {
  if (btn.disabled == false) {
    window.location = "main.html";
  }
};

input.addEventListener("keyup", loginActive);
btn.addEventListener("click", pageMove);
