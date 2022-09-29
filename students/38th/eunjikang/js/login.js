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
  validate();
});

function validate() {
  if (email.value == null || email.value == "") {
    alert("Please enter the email.");
    return false;
  } else if (!email.value.includes("@") || email.value.length < 5) {
    alert("Please enter a valid email address.");
    return false;
  } else if (password.value == null || password.value == "") {
    alert("Please enter the password.");
    return false;
  } else if (password.value.length < 6) {
    alert("Please enter a valid password");
  } else {
    alert("Welcome Back!");
    location.href = "main.html";
  }
}
