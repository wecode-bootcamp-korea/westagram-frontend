const userId = document.querySelector(".id");
const userPw = document. querySelector(".pw");
const loginButton = document.querySelector("button");

loginButton.disabled = true;

function doLogin() {
    let username = userId.value;
    let userpw = userPw.value;

    if(username.length>=1 && userpw.length>=1){
        loginButton.classList.add('btn_change')
        if (username.indexOf('@')>=1 && userpw.length>=5){
            loginButton.disabled = false;
        }
    } else{
        loginButton.classList.remove('btn_change')
    }
}

function clickLoginButton(event) {
    event.preventDefault()
    localStorage.setItem('name',userId.value);
    window.location.href='main.html'
}

userId.addEventListener('input', doLogin);
userPw.addEventListener('input', doLogin);
loginButton.addEventListener('click', clickLoginButton);


console.log(localStorage.getItem('name'));