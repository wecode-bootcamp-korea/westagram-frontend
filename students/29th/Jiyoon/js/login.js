const loginButton = document.querySelector(".loginBtn");
const idValue = document.querySelector(".idValue");
const passwordValue = document.querySelector(".passwordValue");

const login = function () {
  
  if (idValue.value.length > 0 && passwordValue.value.length > 0) {
    loginButton.style.backgroundColor = "rgb(0, 149, 246)"
  } else {
    loginButton.style.backgroundColor = "#C0DFFD"
  }

};

idValue.addEventListener("keyup", login);
passwordValue.addEventListener("keyup", login);

// loginButton.addEventListener('click', () => {
//   console.log(id)
// })