const id = document.querySelector(".id");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

function inputValue() {
    const idValue = id.value;
    const passwordValue = password.value;
    if (idValue.includes("@") && passwordValue.length >= 8) {
        btn.style.backgroundColor = "blue";
    } else {
        btn.style.backgroundColor = "#c5e1fa";
    }
}
password.addEventListener("keyup", () => {
    inputValue();
});
