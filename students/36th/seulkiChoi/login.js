const id = document.querySelector('.id');
const pw = document.querySelector('.pw');
const loginBtn = document.querySelector('.login_btn');

addEventListener('keyup', login => {
    let idValue = id.value;
    let pwValue = pw.value;
    login = idValue.length > 0 && pwValue.length > 0 ? loginBtn.style.backgroundColor = "#0095F6"
        : loginBtn.style.backgroundColor="#C4E1FB";
    }
    )