const $idInput = document.getElementById('idInput')
const $pwInput = document.getElementById('pwInput')
const $loginBtn = document.getElementById('loginBtn')

function checkLogin(){
    if(($idInput.value && $pwInput.value) && ($pwInput.value.length >= 5) && ($idInput.value.includes('@') || $pwInput.value.length >= 5))
    {
        $loginBtn.removeAttribute('disabled')
    }
}

const init = () => {
    $idInput.addEventListener('keyup',checkLogin)
    $pwInput.addEventListener('keyup',checkLogin)
}
init()
