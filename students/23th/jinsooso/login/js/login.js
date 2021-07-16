/** @format */

const id = document.getElementById("id");
const pw = document.getElementById("password");
const loginButton = document.getElementById("button-login");

function onKey() {
  if (id.value !== "" && pw.value !== "") {
    loginButton.style.backgroundColor = "black";
  } else if (id.value === "" || pw.value === "") {
    loginButton.style.backgroundColor = "#b2dffc";
  }
}

id.addEventListener("keyup", onKey);
pw.addEventListener("keyup", onKey);
