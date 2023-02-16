let idInput = document.getElementById("LoginId");
let pwInput = document.getElementById("LoginPw");
const btn = document.getElementById("LoginBtn");

idInput.addEventListener("keyup", changeColor);
pwInput.addEventListener("keyup", changeColor);

function changeColor() {
    if (idInput.value !== "" && pwInput.value !== "") {
        btn.style.backgroundColor = "rgb(0,149,246)";
        document.querySelector(".login_btn").removeAttribute("disable");        
    } else {
        btn.style.backgroundColor = "rgb(76,181,249)";
    }
}