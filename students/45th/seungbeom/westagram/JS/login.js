const idInput = document.getElementById("id-input");
const pwInput = document.getElementById("pw-input");
const loginButton = document.getElementById("login-button");

idInput.addEventListener("keyup", login || function(e){
    if(e.keyCode === 8){
        login()
}});
pwInput.addEventListener("keyup", login);
// loginButton.addEventListener("click", watch);

// function watch(){
//     let result = `<div id="modal">
//     <span id="num">${idInput.value}</span>
//     <span>
//         <p id="id">${pwInput.value}</p>
//         <p id="subId">orangeorangeorange | orangeorangeorange</p>
//     </span>
//     </div>`

//     document.getElementById("test").innerHTML = result;
// }

function login(){
    (checkId() && (pwInput.value.length >= 5))?
    (loginButton.disabled = false, loginButton.style.backgroundColor="blue"):
    (loginButton.disabled = true, loginButton.style.backgroundColor="lightblue")
}

function checkId(){
    for(let i=0; i<idInput.value.length; i++){
        if(idInput.value[i] == "@"){
            return true;
        }
    }
}

