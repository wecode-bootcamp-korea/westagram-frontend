const loginBox = document.querySelector('.loginButton');
const loginBtn = document.querySelector('button');
loginBtn.disabled = true;


loginBox.addEventListener("keyup",listener)


function listener() {
    if(loginBox === ""){
        loginBtn.disabled = true;
    }
    else{
        loginBtn.disabled = false;
    }
}


listener()
