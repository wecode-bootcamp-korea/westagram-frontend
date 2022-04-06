const Formad = document.querySelector(".input_info")
const idForm = document.querySelector(".input_id");
const passwordForm = document.querySelector(".input_password")
const loginBtn = document.querySelector(".login_btn")
const aDaum = document.querySelector('.daum')


// (1)
// Formad.addEventListener("keyup", visible)


// (2)
idForm.addEventListener("keyup", visible)
passwordForm.addEventListener("keyup", visible)



function visible () {
    if(idForm.value.indexOf("@") >=0 && (passwordForm.value.length>=5)) {
        loginBtn.disabled === false
        aDaum.disabled === false
        loginBtn.style.backgroundColor = "#0295F6"
    } else if(idForm.value || passwordForm.value) {
        loginBtn.disabled === true
        loginBtn.style.backgroundColor = "#C4E1FB"
    }
}