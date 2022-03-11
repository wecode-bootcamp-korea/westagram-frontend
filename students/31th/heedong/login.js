const userId = document.querySelector(".idInput")
const userPassword = document.querySelector(".passwordInput")
const loginBtn = document.querySelector(".loginButton")

function login (){
    const id = userId.value;
    const pw = userPassword.value;
    
    if (id.length > 0 && pw.length > 0) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#0095f6";
        loginBtn.style.curser = 'pointer';
    } else {
        loginBtn.disabled = true;
        loginBtn.style.curser = 'default';
    }
};

userId.addEventListener('keyup', login);
userPassword.addEventListener('keyup', login);