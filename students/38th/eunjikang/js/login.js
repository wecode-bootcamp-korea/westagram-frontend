let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submit_btn");

document.addEventListener("keyup", () => {
  if (email.value.length !== 0 && password.value.length !== 0) {
    submitBtn.style.backgroundColor = "black";
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "main.html";
});
