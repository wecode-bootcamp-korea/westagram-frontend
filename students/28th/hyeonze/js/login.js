// 1차 리팩토링후
window.onload = function(){
    let userName = document.querySelector('.username');
    let userPassword = document.querySelector('.userpassword');
    let button = document.querySelector('button');
    let btnActivated = false;

    let activateBtn = (e) => {
        let userName = document.querySelector('.username').value;
        let userPw = document.querySelector('.userpassword').value;

        if (userName && (userName.indexOf('@') !== -1) && (userPw.length >= 5)) {
            button.style.backgroundColor = '#0095F6';
            button.setAttribute('onclick', "location.href='main.html'");
            btnActivated = true;
        } else {
            button.style.backgroundColor = '#c5e1fa';
            button.setAttribute('onclick', "");
            btnActivated = false;
        }

        if (e.keyCode === 13 && btnActivated) location.href="main.html";
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