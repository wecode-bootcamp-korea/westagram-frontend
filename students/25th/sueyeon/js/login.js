const loginBtn = document.getElementsByClassName("btn")[0];
const userID = document.getElementsByClassName("userID")[0];
const pw = document.getElementsByClassName("pw")[0];

const activateBtn = () => {
        loginBtn.style.opacity = userID.value && pw.value ? 1 : 0.3;
}

userID.addEventListener("keyup", () => {
    activateBtn();
})

pw.addEventListener("keyup", () => {
    activateBtn();
})