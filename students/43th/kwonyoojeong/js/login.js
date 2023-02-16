const id = document.querySelector(".id");
const pw = document.querySelector(".password");
const button = document.querySelector(".loginButton");

const activeButton = () => {
  if (id.value && pw.value) {
    // button.setAttribute("disabled", false) 는 적용되지 않는다.
    button.removeAttribute("disabled");
    button.style.backgroundColor = "#389ed3";
  } else {
    // else 조건이 없으면 버튼이 활성화된 후 id 또는 pw를 지웠을 때 다시 비활성화 상태로 돌아가지 않는다.
    button.setAttribute("disabled", true);
    button.style.backgroundColor = "#c4e1fb";
  }
};

id.addEventListener("keyup", (event) => {
  activeButton();
});

pw.addEventListener("keyup", (event) => {
  activeButton();
});
