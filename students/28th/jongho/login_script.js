const thisEmail = document.getElementsByClassName('email')[0];
const thisPassword = document.getElementsByClassName('password')[0];
const thisButton = document.getElementsByClassName('loginBtn')[0];


thisEmail.addEventListener('keyup', function(event) {
    const emailValue = thisEmail.value;
    const passwordValue = thisPassword.value;

    if(emailValue.length > 0 && passwordValue.length > 0) {
        thisButton.style.backgroundColor = '#3696fa';
    } else {
        thisButton.style.backgroundColor = '#c4e1fb';
    }
})

thisPassword.addEventListener('keyup', function(event) {
    const emailValue = thisEmail.value;
    const passwordValue = thisPassword.value;

    if(emailValue.length > 0 && passwordValue.length > 0) {
        thisButton.style.backgroundColor = '#3696fa';
    } else {
        thisButton.style.backgroundColor = '#c4e1fb';
    }
})