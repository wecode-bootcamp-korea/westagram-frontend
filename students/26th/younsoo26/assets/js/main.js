const loginBttn = document.getElementById('submit');
const thisIsUser = document.getElementById('username');
const thisIsPassword = document.getElementById('password');

const activateBttn = () => {
    if(thisIsPassword.value && thisIsUser.value){
        loginBttn.classList.add("login-activate");
    }else{
        loginBttn.classList.remove("login-activate");
    }
}

thisIsUser.onkeyup = activateBttn;
thisIsPassword.onkeyup = activateBttn;

// console.log(thisIsPassword)