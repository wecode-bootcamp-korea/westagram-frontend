const inputId = document.querySelector('.loginId');
const inputPassword = document.querySelector('.loginPassword');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

// loginId.addEventListener('keyup', checkInput);
// loginPassword.addEventListener('keyup', checkInput);
inputs.forEach((inputTag) => {
    inputTag.addEventListener('keyup', checkInput);
});

function checkInput () {
    let IdLength = inputId.value.length;
    let passwordLength = inputPassword.value.length;

    IdLength>0 && passwordLength>0 ? (
        button.style.opacity = 1,
        button.style.cursor = 'pointer'
    ) : (
        button.style.opacity = 0.5,
        button.style.cursor = 'default'
    )
}

/*if(IdLength>0 && passwordLength>0){
        button.style.opacity = 1;
        button.style.cursor = 'pointer';
    } else {
        button.style.opacity = 0.5;
        button.style.cursor = 'default';
    }*/