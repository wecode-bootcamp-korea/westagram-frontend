const thisIsButton = document.querySelector("button");
const rightid = "wjd2676@gmail.com";
const rightpw = "1111";
const thisIsId = document.querySelector(".ID");
const thisIsPw = document.querySelector(".PW");

const thisIsLogin = function () {
  const id = document.querySelector(".ID").value;
  const password = document.querySelector(".PW").value;
  if (!password) {
    alert("비밀번호를 입력해주세요!");
    return;
  }
  if (!id) {
    alert("아이디를 입력해주세요!");
    return;
  }
  if (id !== rightid) {
    alert("아이디를 확인해주세요!");
    return;
  }
  if (password !== rightpw) {
    alert("비밀번호를 확인해주세요!");
    return;
  }
  if (password == rightpw && id == rightid) {
    window.location.href = "main.html";
  }
};

thisIsButton.addEventListener("click", thisIsLogin());

thisIsPw.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) thisIsLogin();
});

const opacityControl = function () {
  const idLength = document.querySelector(".ID").value.length;
  const pwLength = document.querySelector(".PW").value.length;

  if (idLength > 0 && pwLength > 0) return true;
  else return false;
};

// console.log를 잘 찍어보자.

thisIsId.addEventListener("keyup", function () {
  if (opacityControl()) {
    document.querySelector("button").style.opacity = 1.0;
  } else {
    document.querySelector("button").style.opacity = 0.4;
  }
});

thisIsPw.addEventListener("keyup", function () {
  if (opacityControl()) {
    document.querySelector("button").style.opacity = 1.0;
  } else {
    document.querySelector("button").style.opacity = 0.4;
  }
});
