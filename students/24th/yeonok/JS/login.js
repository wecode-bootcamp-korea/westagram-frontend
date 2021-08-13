const putID = document.querySelector(".id-input");
const putPW = document.querySelector(".pw-input");
let loginBtn = document.querySelector(".sign-in button");
const hideTag = document.querySelector(".when-text-in");

putID.addEventListener("input", function () {
    loginBtn.style.backgroundColor = "blue";
});
putPW.addEventListener("input", function () {
    loginBtn.style.backgroundColor = "blue";
    // hideTag.style.visibility = "visible";
});
