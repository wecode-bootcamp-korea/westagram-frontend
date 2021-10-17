const input1 = document.querySelector(".input1"); 
const input2 = document.querySelector(".input2");
const button = document.querySelector(".button1");
const loginForm = document.getElementById('loginForm');

//button.disabled = true;



loginForm.addEventListener('input',function(){
const inp1 = input1.value;
const inp2 = input2.value;

if(inp1 && inp2){
    document.getElementsByClassName("button1")[0].style.backgroundColor="blue"
}
})


/*input.addEventListener("keyup", inputId)
function inputId () {
    if (input.value) {
        button.disabled = true;
        button.style.opacity = 1;
    } else {
        button.disabled = false;
        button.style.opacity = .5;
    }
}

const inputt = document.querySelector(".input2"); 
const buttonn = document.querySelector(".button1");
button.disabled = true;

inputt.addEventListener("keyup", inputPassword)
function inputPassword () {
    if (inputt.value) {
        button.disabled = true;
        button.style.opacity = 1;
    } else {
        button.disabled = false;
        button.style.opacity = .5;
    }
}*/


// if (input === 0 && inputt === 0) {
//     return inputId() 
// }