const idActivate = document.querySelector(".idLogin");
const pwActivate = document.querySelector(".pawLogin");
const loginActivate = document.querySelector(".btnLogin");



function loginEventActivate () {
    if(idActivate.value && pwActivate.value){
        loginActivate.disabled = "false";
        loginActivate.style.backg
        WestagramCloneCoding.location.main.html;
    }else {
        loginActivate.disabled = "true";
        loginActivate.style.backgroundColor = "rgb(198, 222, 250)"
    }
}


idActivate.addEventListener('keypress', loginEventActivate)
pwActivate.addEventListener('keypress', loginEventActivate)