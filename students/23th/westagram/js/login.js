function inputTextEvent() {
  const idInput = document.querySelector(`#loginIdInput`),
    pwInput = document.querySelector(`#loginPwInput`);

  const loginBtn = document.querySelector(`#loginBtn`);

  idInput.addEventListener(`keyup`, () => {
    idInput.value !== ``
      ? (loginBtn.style.backgroundColor = `var(--blue)`)
      : (loginBtn.style.backgroundColor = `var(--light-blue)`);
  });

  pwInput.addEventListener(`keyup`, () => {
    const loginBtn = document.querySelector(`#loginBtn`);
    pwInput.value !== ``
      ? (loginBtn.style.backgroundColor = `var(--blue)`)
      : (loginBtn.style.backgroundColor = `var(--light-blue)`);
  });
}

function loginBtnClick() {
  // const url = window.location.href;
  // let nowUrl = url.split(`/`);
  // if (nowUrl[3] === `login.html`) {
  const idInput = document.querySelector(`#loginIdInput`),
    pwInput = document.querySelector(`#loginPwInput`);
  const loginBtn = document.querySelector(`#loginBtn`);

  loginBtn.addEventListener(`click`, () => {
    console.log(idInput.value);
    if (idInput.value === `` && pwInput.value === ``) {
      alert(`ID, Password를 입력해주세요.`);
    } else if (idInput.value === `` && pwInput.value !== ``) {
      alert(`ID를 입력해주세요.`);
    } else if (idInput.value !== `` && pwInput.value === ``) {
      alert(`Password를 입력해주세요.`);
    } else {
      const url = `./main.html?`;
      history.pushState(``, ``, url);
      localStorage.setItem(`id`, `${idInput.value}`);
    }
  });
  // }
}

// function mainReload() {
//   const url = `http://127.0.0.1:5500/login.html`;
//   console.log(window.location.href);
//   if (window.location.href === url) {
//     location.reload();
//   }
// }

(() => {
  // mainReload();
  loginBtnClick();
  inputTextEvent();
})();
