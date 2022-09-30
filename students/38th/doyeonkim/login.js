document.addEventListener('DOMContentLoaded', () =>{

  const inputId = document.querySelector('#id');
  const inputPassword = document.querySelector('#pw');
  const button = document.querySelector('#btn');

  function loginBtn() {
      let idValue = inputId.value;
      let passwordValue = inputPassword.value;

      if(idValue.indexOf("@") >= 0 && passwordValue.length >= 5) {
          button.disabled = false;
          button.style.cursor = "pointer";
          button.style.backgroundColor = "blue";
      }else {
          button.disabled = true;
          button.style.cursor = "default";
          button.style.backgroundColor = "#c4e1fb";
      }
  }

  inputId.addEventListener('keyup', loginBtn);
  inputPassword.addEventListener('keyup', loginBtn);

  })