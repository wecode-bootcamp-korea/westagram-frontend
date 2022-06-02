const user = document.querySelector(".userId");
const password = document.querySelector(".userPw");
const button = document.querySelector("button");


/*user.addEventListener('keyup', (e) => {
    if(user.value > 0  && password.value > 0 ) {
        loginBtn.style.backgroundColor = "#0095f6";
    } else {
        loginBtn.style.backgroundColor = "#c9e9fd";
    }
}); 

password.addEventListener('keyup', (e) => {
    if(password.value > 0  && user.value > 0 ) {
        loginBtn.style.backgroundColor = "#0095f6";
    } else {
        loginBtn.style.backgroundColor = "#c9e9fd";
    }
}); */
user.addEventListener('keyup', toEvent);
password.addEventListener('keyup', toEvent);

function toEvent() {
    const idValue = user.value;
    const pwValue = password.value;

    if( idValue.includes("@") && pwValue.length > 4) {
        button.disabled = false;
        button.style.backgroundColor = "#0095f6";
    } else {
        button.disabled = true;
        button.style.backgroundColor = "#c9e9fd";
    }
}

function login() {
    location.href ="main.html";
 }