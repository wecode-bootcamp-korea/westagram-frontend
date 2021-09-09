const instaId = document.querySelector('.iId')
const instaPw = document.querySelector('.iPw')
const loginBtnn = document.querySelector('.loginBtn')
// const someinput = document.querySelector('.id');

function asd () {
    const user_id = instaId.value;
    const user_pw = instaPw.value;
        user_id.indexOf('@') !== -1 && user_pw.length > 4 ? loginBtnn.disabled = false : loginBtnn.disabled = true;
    }

instaId.addEventListener('keyup',asd)
instaPw.addEventListener('keyup',asd)

// instaPw.addEventListener('keyup', function () {
//     const user_id = instaId.value;
//     const user_pw = instaPw.value;
//         user_id.length !==0 && user_pw.length >= 5 ?loginBtnn.disabled = false : loginBtnn.disabled = true;
//         })

// instaId.addEventListener('keyup', function () {
//     const user_id = instaId.value;
//     const user_pw = instaPw.value;
//         user_id.length !==0 && user_pw.length >= 5 ? loginBtnn.disabled = false : loginBtnn.disabled = true;
//         })

// someinput.addEventListener('keyup', function () {
//     const user_id = instaId.value;
//     const user_pw = instaPw.value;
//         if(user_id.length !==0 && user_pw.length !==0){
//             loginBtnn.disabled = false;
//         } else {
//             loginBtnn.disabled = true;
//         }
//     }
// )

// instaPw.addEventListener('keyup', function () {
//     const user_id = instaId.value;
//     const user_pw = instaPw.value;
//         user_id.indexOf('@') !== -1 && user_pw.length > 4 ?loginBtnn.disabled = false : loginBtnn.disabled = true;
//         })

// instaId.addEventListener('keyup', function () {
//     const user_id = instaId.value;
//     const user_pw = instaPw.value;
//         user_id.indexOf('@') !== -1 && user_pw.length > 4 ? loginBtnn.disabled = false : loginBtnn.disabled = true;
//         })

