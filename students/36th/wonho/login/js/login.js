const button = document.querySelector('button');
const input = document.querySelector('input')[0];
const id = document.querySelector('#username');
const pw = document.querySelector('#password');
const error = document.querySelector('#errorMsg');
console.log(error);


function activateButton() {

    let idValid = id.value.includes('@');
    let pwValid = pw.value.length >= 5;

    if (idValid && pwValid) {
        button.removeAttribute('disabled')
        button.style.opacity = 1;
    } else if (idValid == false && pwValid == true) {
        button.setAttribute('disabled','');
        button.style.opacity = 0.5;
        error.innerHTML = '아이디는 @가 포함되어야합니다'
    } else if (idValid == true && pwValid == false) {
        button.setAttribute('disabled','');
        button.style.opacity = 0.5;
        error.innerHTML = '비밀번호는 5글자 이상이어야합니다'
    }
}
/*
    switch(!(idValid && pwValid)) {
        case true:
            button.setAttribute('disabled','');
            button.style.opacity = 0.5;
        break;
        case false:
            button.removeAttribute('disabled')
            button.style.opacity = 1;
        break;
    }
}
*/

username.addEventListener('keyup', activateButton);
password.addEventListener('keyup', activateButton);

/*
// Can't validate if id/password is copy/pasted (not written with keyboard)
username.addEventListener('input', activateButton);
password.addEventListener('input', activateButton);
*/