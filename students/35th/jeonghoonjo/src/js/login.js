const loginForm = document.querySelector(".login__box__form");
const loginFormSubmit = document.querySelector(".login__box__form__submit");

const phoneChangeImg = () => {
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

setInterval(phoneChangeImg, 3000);

const isSubmitValue = (idValue, passwordValue) => {
  if (idValue && passwordValue) {
    loginFormSubmit.disabled = false;
    loginFormSubmit.style.opacity = 1;
  }

  if (!idValue && passwordValue) {
    loginFormSubmit.disabled = true;
    loginFormSubmit.style.opacity = 0.6;
  }
};

const checkInputValue = (event) => {
  const idValue = document.querySelector(".login__box__form__id");
  const passwordValue = document.querySelector(".login__box__form__pw");

  const idLabel = document.querySelectorAll("label")[0];
  const passwordLabel = document.querySelectorAll("label")[1];

  if (event.target.name === "id") {
    if (idValue.value) {
      idLabel.classList.remove("label-down");
      idLabel.classList.add("label-up");
    }
    if (!idValue.value) {
      idLabel.classList.remove("label-up");
      idLabel.classList.add("label-down");
    }
  }

  if (event.target.name === "password") {
    if (passwordValue.value) {
      passwordLabel.classList.remove("label-down");
      passwordLabel.classList.add("label-up");
    }
    if (!passwordValue.value) {
      passwordLabel.classList.remove("label-up");
      passwordLabel.classList.add("label-down");
    }
  }
  isSubmitValue(idValue.value, passwordValue.value);
};

loginForm.addEventListener("keyup", checkInputValue);
loginFormSubmit.addEventListener("keypress", (event) => {
  event.preventDefault();
  console.log("123");
});
