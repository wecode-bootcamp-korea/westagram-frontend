const instaId = document.querySelector('.iId')
const instaPw = document.querySelector('.iPw')
const loginBtnn = document.querySelector('.loginBtn')
const loginForm = document.querySelector('.idPw')


function canLogin () {
    const user_id = instaId.value;
    const user_pw = instaPw.value;
        user_id.indexOf('@') !== -1 && user_pw.length > 4 ? loginBtnn.disabled = false : loginBtnn.disabled = true;
    }

instaId.addEventListener('keyup', canLogin)
instaPw.addEventListener('keyup', canLogin)
// idPw.addEventListener('keyup',canLogin)
