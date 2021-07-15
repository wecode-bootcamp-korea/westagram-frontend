function localStorageIdClear() {
  localStorage.clear();
}

// function screenInit(){
//   viewportWidth = window.innerWidth;
//   if(viewportWidth < 450){

//   }
// }

function setIdLocalStorage() {
  const idInput = document.querySelector(`#loginIdInput`),
    loginForm = document.querySelector(`.login-block__form`);

  loginForm.addEventListener(`submit`, () => {
    localStorage.setItem(`id`, `${idInput.value.split(`@`)[0]}`);
  });
}

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

(() => {
  localStorageIdClear();
  setIdLocalStorage();
  inputTextEvent();
})();
