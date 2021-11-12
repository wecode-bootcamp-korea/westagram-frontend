const userName = document.getElementById("name");
const password = document.getElementById("password");

const form = document.getElementById("form");

const button = document.getElementById("button");

const btnOn = () => {
  if (
    userName.value === !"undifined" &&
    userName.value === !null &&
    password.value === !"undifined" &&
    password.value === !null
  ) {
    return console.log(userName.value);
  }
};

if (userName === "INPUT" && userName.type === "text") {
  button.disabled = false;
  document.getElementsByClassName("login_button").style.cursor = "pointer";
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(userName.value);
  //   console.log(event);
  // userName.
});
