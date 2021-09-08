const instaId = document.querySelector('.iId')
const instaPw = document.querySelector('.iPw')
// const someinput = document.querySelector('.id');
const loginBtnn = document.querySelector('.loginBtn')

instaPw.addEventListener('keyup', function () {
    const user_id = instaId.value;
    const user_pw = instaPw.value;
        if(user_id.length !==0 && user_pw.length !==0){
            loginBtnn.disabled = false;
        } else {
            loginBtnn.disabled = true;
        }
    }
)

instaId.addEventListener('keyup', function () {
    const user_id = instaId.value;
    const user_pw = instaPw.value;
        if(user_id.length !==0 && user_pw.length !==0){
             loginBtnn.disabled = false;
        } else {
            loginBtnn.disabled = true;
        }
    }
)

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
