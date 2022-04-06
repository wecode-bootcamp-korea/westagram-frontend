const inputID = document.querySelector("#login-id");
const inputPW = document.querySelector("#login-pass");
const button = document.querySelector("#loginbtn");

button.style.backgroundColor = "b8d3f3";
inputID.addEventListener('keyup', typing);
inputPW.addEventListener('keyup', typing);

function typing() {
    switch(!(inputID.value && inputPW.value)) {
        case true:
        button.disabled = true;
        break;
        case false:
        button.disabled = false;
        button.style.backgroundColor = "#5098EF";
        button.style.color = "white";
        break;
    }
}