const thisIsButton = document.getElementsByClassName("login-btn")[0];
const body = document.querySelector("body");

body.addEventListener("keyup", function () {
  console.log("check");
  const id = document.getElementById("ID").value;
  const pw = document.getElementById("PW").value;

  if (id && pw) {
    // console.log("check");
    thisIsButton.style.backgroundColor = "#2F78D2";
  }
  //   id.value.indexOf('@') > 0 && pw.value.length >= 6?
});
