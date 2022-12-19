const target = document.getElementsByClassName('loginbtn')[0];
const inputEmail = document.getElementsByClassName('email')[0];
const inputPassword = document.getElementsByClassName('password')[0];
// getElementsByClassName은 Elements 즉 복수이기때문에 하나만 가져오려면
// 인덱스를 뒤에 명시 해 주여야 한다.

inputEmail.addEventListener('keyup', activeEvent);
inputPassword.addEventListener('keyup', activeEvent);

function activeEvent() {
    if(!(inputEmail.value && inputPassword.value) || (inputPassword.value).length < 5) {
        target.disabled = true;
        target.classList.remove('buttonDisabled');

    } else if((inputEmail.value).includes('@') && (inputPassword.value).length >= 5) {
        target.disabled = false;
        target.classList.add('buttonDisabled'); // 

    }
}