"use stric";
// 없을 경우는 변수 할당을 let이나 const로 해주지 않아도 되지만
// 이렇게 "use stric"; 사용할 경우 뜨지 않는다.
// >> 사용 이유: 제대로 선언하지 않은 변수가 다른 scope에 영향을 끼칠 수 있기 때문에 사용 권장

const button = document.querySelector(".loginButton");
const realID = "dddd@.com";
const realPassword = "1111";

window.addEventListener("keyup", function () {
  const inputIdValue = document.querySelector(".loginID").value;
  const inputPwValue = document.querySelector(".loginPW").value;

  const loginHandle = function () {
    if (inputIdValue && inputPwValue) {
      button.style.backgroundColor = "#0095F6";
      button.disable = false;
      const pageMove = button.addEventListener("click", () => {
        console.log("ddddd");
      });
      pageMove();
    } else {
      button.disable = true;
      button.style.backgroundColor = "#C4E1FB";
    }
  };
  loginHandle();

  const pageMove = button.addEventListener("click", () => {
    console.log("ddddd");
  });
  pageMove();
});
