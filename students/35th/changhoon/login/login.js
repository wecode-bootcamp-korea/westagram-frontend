const id = document.querySelector(".id")
const pw = document.querySelector(".pw")
const loginBtn = document.querySelector(".loginBtn")
const loginForm = document.querySelector(".signIn")

const canIPass = (ev) => {
    ev.preventDefault();
    if (id.value.indexOf('@') == -1) {
      alert('골뱅이없음 삐');
      return;
    } else if (pw.value.length < 6) {
      alert('비밀번호 너무짧음 삐');
      return;
    }
    location.href = "main.html";
  };

function canIActivate() {
    id.value && pw.value ? (
        loginBtn.disabled = false,
        loginBtn.style.backgroundColor = "#0095f6"
        ) : (
        loginBtn.disabled = true,
        loginBtn.style.backgroundColor = "#B2DFFC"
        )
}

id.addEventListener("keyup", canIActivate)
pw.addEventListener("keyup", canIActivate)
loginForm.addEventListener("submit", canIPass)