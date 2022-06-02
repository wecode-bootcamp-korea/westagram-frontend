// login Button 활성 / 비활성
function inputValueSpotlight() {
  let idInput = document.querySelector('.inputId');
  let passwordInput = document.querySelector('.inputPassword');
  let disabledButton = document.querySelector('.mainBtn');

  function disableButtonOn() {
    disabledButton.disabled = false;
    disabledButton.style.opacity = "1";
    disabledButton.classList.add('cursorPointer');
  }
  function disableButtonOff() {
    disabledButton.disabled = true;
    disabledButton.style.opacity = "0.6";
    disabledButton.classList.remove('cursorPointer');
  }

  idInput.addEventListener('input', () => {
    if ((idInput.value !== "") && (idInput.value.indexOf("@") !== -1)) {
      disableButtonOn();
    } else {
      disableButtonOff();
    }
  });
  passwordInput.addEventListener('input', () => {
    if ((passwordInput.value !== "") && (passwordInput.value.length > 5)) {
      disableButtonOn();
    } else {
      disableButtonOff();
    }
  });
}
inputValueSpotlight();

// login Button Click시 page 이동
function loginButtonClickPage() {
  let loginButton = document.querySelector('.mainBtn');
  loginButton.addEventListener('click', () => {
    window.location.href = "./main.html"
  })
}
loginButtonClickPage();

