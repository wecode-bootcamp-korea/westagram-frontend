const login = document.querySelector(".loginSubmit");
const id = document.querySelector("#idInput");
const pw = document.querySelector("#pwInput");

window.addEventListener("keyup", (e) => {
  id.value !== "" && pw.value !== ""
    ? (login.classList.add("loginAble"), (login.disabled = false))
    : (login.classList.remove("loginAble"), (login.disabled = true));
});

const goToMain = () => (window.location.href = "main.html");
