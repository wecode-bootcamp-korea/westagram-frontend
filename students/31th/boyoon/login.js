const id = document.querySelector("input#id")
const password = document.querySelector("input#password")
const btn = document.querySelector(".btn")

function loginBtn (){
    westaId = id.value;
    westaPassword = password.value;

    if (westaId.length > 0 && westaPassword.length > 0){
        btn.disabled = false;
        btn.style.backgroundColor = "#0096F6";
        btn.style.cursor = "pointer";
    } else {
        btn.disabled = true;
        btn.style.backgroundColor = "#C0DFFD"
        btn.style.cursor = "default"
    }
}

id.addEventListener('keypress', loginBtn);
password.addEventListener('keypress', loginBtn);

id.addEventListener('keyup', loginBtn);
password.addEventListener('keyup', loginBtn);

