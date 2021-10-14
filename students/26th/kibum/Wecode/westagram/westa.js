const input = document.querySelector(".input1"); 
const button = document.querySelector(".button1");
button.disabled = true;

input.addEventListener("keyup", inputId)
function inputId () {
    if (input.value) {
        button.disabled = true;
        button.style.opacity = 1;
        // document.body.style.backgroundColor = "red"
    } else {
        button.disabled = false;
        button.style.opacity = .5;
        // document.body.style.backgroundColor = "yellow"
    }
}

// document.body.style.backgroundColor = "red";