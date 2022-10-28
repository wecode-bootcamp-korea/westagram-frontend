let button = document.getElementsByClassName("activate-button")[0];
let input1 = document.querySelector('.input-id');
let input2 = document.querySelector('.input-pw');

button.disabled = true;

input1.addEventListener("keypress", stateHandle );
input2.addEventListener("keypress", stateHandle );

function stateHandle(){
    if (input1.value === "" && input2.value === "") {
        button.disabled = true;
    } else if(input1.value !== "" && input2.value !== "") {
        button.disabled = false;
    }
}
