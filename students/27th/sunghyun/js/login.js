(function () {
  const id = document.querySelector('#id');
  const password = document.querySelector('#password');
  const loginBtn = document.querySelector('.loginBtn');
  const loginForm = document.querySelector('.inputWapper');

  const checkLoginForm = () => {
    const allchecked = !!id.value && !!password.value;

    allchecked
      ? loginBtn.classList.remove('loginBtn--disable')
      : loginBtn.classList.add('loginBtn--disable');

    loginBtn.disabled = !allchecked;
  };

  const checkLoginValidation = () => {
    const items = loginForm.elements;
    console.log(items.id.value);
    for (const item of items) {
      if (item.name === 'id' && !item.value.includes('@')) {
        alert(`아이디에 '\@'이 포함되어야 합니다.`);
        return;
      }
      if (item.name === 'password' && !(password.value.length >= 5)) {
        alert(`비밀번호는 5자리 이상이어야 합니다.`);
        return;
      }
    }
    location.href = 'main.html';
    alert(`로그인 되었습니다.\n${items.id.value}님 좋은 하루되세요 :)`);
    loginForm.reset();
  };

  const init = () => {
    id.addEventListener('keyup', checkLoginForm);
    password.addEventListener('keyup', (e) => {
      checkLoginForm();
      e.key === 'Enter' && checkLoginValidation();
    });
    loginBtn.addEventListener('click', checkLoginValidation);
  };
  init();
})();
