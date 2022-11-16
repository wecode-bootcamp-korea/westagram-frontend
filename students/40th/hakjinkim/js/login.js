const loginButton = document.getElementById("button");

loginButton.addEventListener("click", showConsole);
function showConsole() {
  alert("로그인 될까?");
}

function emaillog() {
  const id = document.getElementById("email").value;
  const pw = document.getElementById("password").value;
  //const target = document.getElementById("button");

  if (id.length > 0 && pw.length > 0) {
    loginButton.disabled = false;
    loginButton.classList.add("able");
  }
  if (id.length === 0 || pw.length === 0) {
    loginButton.disabled = true;
    loginButton.classList.remove("able");
  }
  console.log(id);
  console.log(pw.length);
}
