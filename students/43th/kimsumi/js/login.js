function loginForm()  {
  const user = document.querySelector('.inp_user').value;
  const password = document.querySelector('.inp_psassword').value;
  const loginButton = document.querySelector('.btn_login');
  if (user && password) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}
