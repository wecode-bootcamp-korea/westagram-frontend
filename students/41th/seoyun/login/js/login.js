const idBoxInput = document.querySelector('#idBox');
const pwBoxInput = document.querySelector('#pwBox');
const Btn = document.querySelector('.loginBtn');

function activateLoginBtn() {
    let idValue = idBoxInput.value;
    let pwValue = pwBoxInput.value;
    if (idValue.length > 0 && pwValue.length > 0) {
        Btn.style.backgroundColor = "#0095F6";
    } else {
        Btn.style.backgroundColor = "#c0dffd";
    }
}

    idBoxInput.addEventListener('keyup', activateLoginBtn);
    pwBoxInput.addEventListener('keyup', activateLoginBtn);
