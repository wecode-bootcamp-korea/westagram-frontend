const id = document.querySelector(".id");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");
const aTag = document.querySelector(".aTag");
console.log(aTag);
function inputValue() {
    const idValue = id.value;
    const passwordValue = password.value;
    if (idValue.includes("@") && passwordValue.length >= 8) {
        btn.style.backgroundColor = "blue";
        aTag.setAttribute("href", "../main/main.html");
    } else {
        btn.style.backgroundColor = "#c5e1fa";
        aTag.removeAttribute("href");
    }
}
password.addEventListener("keyup", () => {
    inputValue();
});
