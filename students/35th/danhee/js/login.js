//로그인 박스 색깔변경

const id = document.querySelector("#loginId");
const pw = document.querySelector("#loginPw");
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("keyup", () => {
  const main = document.querySelector("#login");
  if (id.value && pw.value) {
    //ID & PW가 값이 있.을.때!
    main.disabled = false;
    main.style.opacity = 0.7;
    //id class인 login이 활성화되지않는다의 false
  } else {
    main.disabled = true;
    main.style.opacity = 0.3;
  }
});

pw.addEventListener("keyup", () => {
  console.log(`패스워드: ${pw.value}`);
});

// main.addEventListener("click", () => {
//   main.innerHTML = "instagram";
// });
