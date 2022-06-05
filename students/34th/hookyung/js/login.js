"use stric";
// 없을 경우는 변수 할당을 let이나 const로 해주지 않아도 되지만
// 이렇게 "use stric"; 사용할 경우 뜨지 않는다.
// >> 사용 이유: 제대로 선언하지 않은 변수가 다른 scope에 영향을 끼칠 수 있기 때문에 사용 권장

// const button = document.querySelector(".loginButton");
// const realID = "dddd@.com";
// const realPassword = "1111";

// window.addEventListener("keyup", function () {
//   const inputIdValue = document.querySelector(".loginID").value;
//   const inputPwValue = document.querySelector(".loginPW").value;

//   const loginHandle = function () {
//     if (inputIdValue && inputPwValue) {
//       button.style.backgroundColor = "#0095F6";
//       button.disable = false;
//       const pageMove = button.addEventListener("click", () => {
//         console.log("ddddd");
//       });
//       pageMove();
//     } else {
//       button.disable = true;
//       button.style.backgroundColor = "#C4E1FB";
//     }
//   };
//   loginHandle();

//   const pageMove = button.addEventListener("click", () => {
//     console.log("ddddd");
//   });
//   pageMove();
// });

// 버튼 활성화 > 입력창에 값이 있을경우 disable

// 변화를 인식하고 변화를 가져와야 할 부분 인풋, 버튼
const inputs = document.getElementsByClassName("login-form")[0];
// 이벤트 위임 form 태그의 변화를 추척 > 자식요소의 변화까지 감지한다.
// 만약에 form에 많은 정보가 들어온다면 하나하나 걸어두기 번거롭기 때문에 한꺼번에 감지한다.
const loginButton = document.querySelector(".loginButton");

function handleButton(btnValid) {
  if (btnValid) {
    loginButton.disable = false;
    loginButton.style.opacity = 1;
    loginButton.style.cursor = "pointer";

    if (window.event.code === "Enter") {
      success();
    }
  } else {
    loginButton.disable = true;
    loginButton.style.opacity = 0.3;
    loginButton.style.cursor = "default";
  }
}

function checkId(value) {
  if (value.length > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPw(value) {
  if (value.length > 0) {
    return true;
  } else {
    return false;
  }
}

const HandleInput = () => {
  const idValue = document.querySelector(".loginID").value;
  const pwValue = document.querySelector(".loginPW").value;

  const isValiId = checkId(idValue);
  const isvaliPw = checkPw(pwValue);

  if (isValiId && isvaliPw) {
    handleButton(true);
  } else {
    handleButton(false);
  }
};

const success = () => {
  location.href = "/hookyung/main.html";
  // window.location.pathname = "/main.html";
  // location.replace("http://127.0.0.1:5500/hookyung/main.html");
};

const init = () => {
  inputs.addEventListener("input", HandleInput);
  // 인풋창에서 하나하나 기입하는 것이 아니라 다른곳에서 복붙했을 때에도 가능하도록.
  inputs.addEventListener("keyup", HandleInput);
  loginButton.addEventListener("click", success);
};

init();
