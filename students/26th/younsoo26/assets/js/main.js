const loginBttn = document.getElementById('submit');
const thisIsUser = document.getElementById('username');
const thisIsPassword = document.getElementById('password');

let inputUserID;
let inputPasswords;


const userIDChecker = e => {
    inputUserID = e.target.value;
    activateSubmit();
}

const passwordChecker = e => {
    inputPasswords = e.target.value;
    activateSubmit();
}

const activateSubmit = () => {
    inputUserID&&inputPasswords ? loginBttn.classList.add("login-activate") : loginBttn.classList.remove("login-activate");
}

thisIsUser.oninput = userIDChecker;
thisIsPassword.oninput = passwordChecker;

// const activateBttn = () => {
//     if(thisIsPassword.value && thisIsUser.value){
//         loginBttn.classList.add("login-activate");
//     }else{
//         loginBttn.classList.remove("login-activate");
//     }
// }

// thisIsUser.onkeyup = activateBttn;
// thisIsPassword.onkeyup = activateBttn;

// console.log(thisIsPassword)