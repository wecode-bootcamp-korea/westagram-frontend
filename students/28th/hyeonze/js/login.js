// 1차 리팩토링후
window.onload = function(){
    let userName = document.querySelector('.username');
    let userPassword = document.querySelector('.userpassword');
    let button = document.querySelector('button')

    let activateBtn = () => {
        let userName = document.querySelector('.username').value;
        let userPw = document.querySelector('.userpassword').value;

        if (userName && userPw) {
            button.style.backgroundColor = '#0095F6';
            button.setAttribute('onclick', "location.href='main.html'");
        } else {
            button.style.backgroundColor = '#c5e1fa';
            button.setAttribute('onclick', "");
        }
    }

    userName.addEventListener('keyup', activateBtn);
    userPassword.addEventListener('keyup', activateBtn);
}

// 리팩토링전
// window.onload = function(){
//     let body = document.querySelector('body');
//     let button = document.querySelector('button')

//     body.addEventListener('keyup', function(){
//         let userName = document.querySelector('.username').value;
//         let userPw = document.querySelector('.userpassword').value;
//         if (userName && userPw) {
//             button.style.backgroundColor = '#0095F6';
//             button.setAttribute('onclick', "location.href='main.html'");
//         }
//     });
// }