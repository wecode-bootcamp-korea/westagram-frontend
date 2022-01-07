
const idInput = document.getElementsByClassName("idInput")[0];
const pwInput = document.getElementsByClassName("pwInput")[0];
const logB = document.querySelector(".logB");

function loginChange () {
    let idValue = idInput.value;
    let pwValue = pwInput.value;
    if(idValue.length > 0 && pwValue.length > 0){ 
        logB.disabled = false;
        logB.style.backgroundColor = "#345D87";
    }else {
        logB.disabled = true;
        logB.style.backgroundColor = "#C5DFF9"
    }
}

idInput.addEventListener('keyup',loginChange);
pwInput.addEventListener('keyup',loginChange);