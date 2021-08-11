
let $loginBnt = document.querySelector('.login_bnt')
let $idValue = document.querySelector('.idValue')
let $passwordValue = document.querySelector('.passwordValue')
$loginBnt.addEventListener('click',() => {
    
})
$idValue.addEventListener('keydown',() => {
    $idValue.value.length > 0 && $passwordValue.value.length > 5 ?
    $loginBnt.style.backgroundColor = "#0095F6" : $loginBnt.style.backgroundColor = '#C4E1FB';
})
$passwordValue.addEventListener('keydown',() => {
    $idValue.value.length > 0 && $passwordValue.value.length > 5 ? 
    $loginBnt.style.backgroundColor = "#0095F6" : $loginBnt.style.backgroundColor = '#C4E1FB';
})