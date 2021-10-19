let id1 = document.querySelector(".id")
let pw1 = document.querySelector(".pw")
let butt = document.querySelector(".button")
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('input' ,function() {
    const idVal = id1.value;
    const pwVal = pw1.value;
    idVal.includes("@") ==true && pwVal.length >= 5 ? (
    butt.disabled = false,
    butt.style.backgroundColor = "blue"
    ) : (
    butt.disabled = true
    )
})


