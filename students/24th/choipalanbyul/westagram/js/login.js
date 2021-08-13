
const $loginBtn = document.querySelector('.login_btn')
const $idValue = document.querySelector('.idValue')
const $passwordValue = document.querySelector('.passwordValue')
const loginBtn = function () {
    $idValue.value.indexOf('@') > 0 && $passwordValue.value.length >= 6 ?
    $loginBtn.style.backgroundColor = "#0095F6" : $loginBtn.style.backgroundColor = '#C4E1FB';
}
$idValue.addEventListener('keyup', loginBtn)
$passwordValue.addEventListener('keyup', loginBtn)