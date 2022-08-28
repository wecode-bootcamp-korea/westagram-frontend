const loginWrapperElem = document.querySelector("#loginWrapper");
const inputIdElem = document.querySelector(".loginId");
const inputPasswordElem = document.querySelector(".loginPassword");
const loginButtonElem = document.querySelector(".loginButton");

loginWrapperElem.addEventListener("keyup", () => {
  // const inputId = inputIdElem.value;
  // const inputPassword = inputPasswordElem.value;
  // if (inputId.length > 0 && inputPassword.length > 0) {
  //   loginButtonElem.disabled = false;
  // } else {
  //   loginButtonElem.disabled = true;
  // }

  console.log("id :", !!inputIdElem.value);
  console.log("pw :", !!inputPasswordElem.value);
  loginButtonElem.disabled = !(
    !!inputIdElem.value && !!inputPasswordElem.value
  );
});

const login = () => {
  const idInPutValue = inputIdElem.value;
  const pwdInputValue = inputPasswordElem.value;
  const emailPattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!emailPattern.test(idInPutValue)) {
    return alert("이메일을 입력해주세요");
  }

  if (pwdInputValue.length < 5) {
    return alert("비밀번호를 5글자 이상 입력해주세요");
  }

  location.href = "/main.html";
};

loginButtonElem.addEventListener("click", login);
