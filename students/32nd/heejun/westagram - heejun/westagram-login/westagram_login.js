const login_form = document.querySelector('form');
const logId = document.querySelector('.loginName');
const logPass = document.querySelector('.loginPassword');
const login_btn = document.querySelector('.loginButton');

const loginColor = () => {
  const idValue = logId.value;
  const passWordValue = logPass.value;

  if (idValue && passWordValue) {
    login_btn.disabled = false;
    login_btn.style.backgroundColor = 'blue';
  } else {
    login_btn.disabled = true;
    login_btn.style.backgroundColor = '#C0DFFD';
  }
};

login_form.addEventListener('keyup', loginColor);

console.log('logPasss');

/*
const handleKeyup = () => {
    const idValue = inputId.value;
    const pwValue = inputPw.value;
    if (idValue && pwValue) {
      loginBtn.disabled = false;
      loginBtn.style.backgroundColor = "blue";
    } else {
      loginBtn.disabled = true;
      loginBtn.style.backgroundColor = "#C0DFFD";
    }
  };
  lgForm.addEventListener("keyup", handleKeyup);
*/
