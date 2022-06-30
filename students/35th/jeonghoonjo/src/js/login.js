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

const switchingLabel = (value, label) => {
  if (value) {
    label.classList.remove("label-down");
    label.classList.add("label-up");
  }

  if (!value) {
    label.classList.remove("label-up");
    label.classList.add("label-down");
  }
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

  const getId = document.querySelector(".login__box__form__id").value;
  const getPassword = document.querySelector(".login__box__form__pw").value;

  const idLabel = document.querySelectorAll("label")[0];
  const passwordLabel = document.querySelectorAll("label")[1];

  if (targetName === "id") {
    switchingLabel(getId, idLabel);
  }
  if (targetName === "password") {
    switchingLabel(getPassword, passwordLabel);
  }

  validationAccount(getId, getPassword);
};

const login = (event) => {
  event.preventDefault();
  location.href = "./main.html";
};

loginForm.addEventListener("keyup", checkInput);
loginForm.addEventListener("submit", login);
