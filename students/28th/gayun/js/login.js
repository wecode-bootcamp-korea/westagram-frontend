
const $form = document.querySelector('form');
const $idInput = document.querySelector('#id');
const $pwInput = document.querySelector('#password');
const $loginButton = document.querySelector('#login-button');
const $notice = document.querySelector('.notice');


$idInput.addEventListener('keyup', activeButton);
$pwInput.addEventListener('keyup', activeButton);


function activeButton() {
    const idInputVal = $idInput.value;
    const pwInputVal = $pwInput.value;

    if(idInputVal.length > 0 && pwInputVal.length > 0) {
        if(idInputVal.includes('@') && pwInputVal.length >= 5) {
            if(!$loginButton.classList.contains('active')) {
                $loginButton.classList.add('active');
            }
            if(!$notice.classList.contains('hide')) {
                $notice.classList.add('hide');
            }
        }
    } else {
        $loginButton.classList.remove('active');
        $notice.classList.remove('hide')
    }
}