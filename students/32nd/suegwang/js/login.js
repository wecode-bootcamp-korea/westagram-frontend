const id = document.getElementById("idIn");
const pw = document.getElementById("pwIn");
const login = document.getElementById("login-bt");

id.addEventListener("keyup", active);
pw.addEventListener("keyup", active);

function active() {
  if (id.value != "" && pw.value != "") {
    login.disabled = false;
  } else {
    login.disabled = true;
  }
}

login.addEventListener("click", active2);

function active2() {
  if ((login.disabled = true)) {
    alert("환영합니다 😎");
    window.location.href = "./main.html";
  } else {
    alert("빈칸을 채우세요.");
  }
}
