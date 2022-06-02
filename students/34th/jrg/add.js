const id = document.querySelector('.id_input');
const pw = document.querySelector('.pw_input');
const btn = document.querySelector('.login_btn');

id.addEventListener("keyup", logInOn)
pw.addEventListener("keyup", logInOn2)

function logInOn() {
    console.log(id.value);
    console.log(pw.value);
    if(pw.value != "") {
        btn.style.opacity="1";
    } else {
        btn.style.opacity="0.8";
    }
}

function logInOn2() {
    console.log(id.value);
    console.log(pw.value);
    if(pw.value != "") {
        btn.style.opacity="1";
    } else {
        btn.style.opacity="0.8";
    }
}


