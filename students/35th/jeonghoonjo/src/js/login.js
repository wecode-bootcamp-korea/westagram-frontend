const loginForm = document.querySelector(".login__box__form");
const loginFormSubmit = document.querySelector(".login__box__form__submit");
const loginBtn = document.querySelector(".login__box__form__submit");

const changePhoneImg = () => {
  const phone = document.querySelector(".phone__inner");
  const imgArr = [
    "./img/phone_inner_img_1.png",
    "./img/phone_inner_img_2.png",
    "./img/phone_inner_img_3.png",
    "./img/phone_inner_img_4.png",
  ];
  let randomIndex = Math.round(Math.random() * 3);
  phone.src = imgArr[randomIndex];
};

setInterval(changePhoneImg, 3000);

const validationAccount = (id, password) => {
  if (id && password) {
    loginFormSubmit.disabled = false;
    loginFormSubmit.style.opacity = 1;
  }

  if (!id && password) {
    loginFormSubmit.disabled = true;
    loginFormSubmit.style.opacity = 0.6;
  }
};

const checkInput = (event) => {
  const targetName = event.target.name;

  const getId = document.querySelector(".login__box__form__id");
  const getPassword = document.querySelector(".login__box__form__pw");

  const idLabel = document.querySelectorAll("label")[0];
  const passwordLabel = document.querySelectorAll("label")[1];

  if (targetName === "id") {
    if (getId.value) {
      idLabel.classList.remove("label-down");
      idLabel.classList.add("label-up");
    }
    if (!getId.value) {
      idLabel.classList.remove("label-up");
      idLabel.classList.add("label-down");
    }
  }

  if (targetName === "password") {
    if (getPassword.value) {
      passwordLabel.classList.remove("label-down");
      passwordLabel.classList.add("label-up");
    }
    if (!getPassword.value) {
      passwordLabel.classList.remove("label-up");
      passwordLabel.classList.add("label-down");
    }
  }
  validationAccount(getId.value, getPassword.value);
};

const login = (event) => {
  event.preventDefault();
  location.href = "./main.html";
};

loginForm.addEventListener("keyup", checkInput);
loginForm.addEventListener("submit", login);
