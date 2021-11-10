let whatId = document.getElementById('id1');
let whatPassword = document.getElementById('password1');

function changeButton() {
    if (whatId.value.length > 0 && whatPassword.value.length>0) {
        let changeColor = document.getElementsByClassName('beforeButton')[0];
        changeColor.style.backgroundColor = "#4193ef";
    }else if(whatId.value.length === 0 || whatPassword.value.length ===0) {
        let changeColor = document.getElementsByClassName('beforeButton')[0];
        changeColor.style.backgroundColor = "#c5e1fa";
    }
}

let loginEvent = document.getElementsByClassName('loginBox')[0];
loginEvent.addEventListener('keyup', changeButton);