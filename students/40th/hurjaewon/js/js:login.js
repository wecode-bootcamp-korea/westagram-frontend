const id = document.querySelector("#text_box");
const pw = document.querySelector("#password_box");
const button = document.querySelector(".button_box");

const changeColor = () => {    
    const isValid = id.value.length > 0 && pw.value.length > 0;
    button.disabled = !isValid;
}

id.addEventListener('keyup', changeColor);
pw.addEventListener('keyup', changeColor);
