const id = document.getElementById("userId");
const pw = document.getElementById("userPw");
const submit = document.getElementById("btn");
const login = document.querySelector(".login");

const checkIdPw = () => {
  if (id.value.length > 0 && pw.value.length > 0) {
    submit.disabled = false;
    submit.classList.add("focus");
    //비활성화가 아니면 정보를 체크리스트에 더한다.
  } else {
    submit.disabled = true;
    submit.classList.remove("focus");
    //비활성화가 그대로면 체크리스트에서 지운다.
  }
};

login.addEventListener("keyup", checkIdPw);
