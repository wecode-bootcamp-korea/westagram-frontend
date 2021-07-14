let input = document.querySelector(".inputWrap");
let button = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", stateHandle);
function statehandle() {
    if (document.querySelector(".inputWrap").value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}