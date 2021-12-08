'use strict';

const thisIsId_activity = document.getElementsByClassName('login_email')[0];
const thisIsPw_activity = document.getElementsByClassName('login_pw')[0];


thisIsPw_activity.addEventListener('keyup', function(e){
    const id = document.querySelector('.login_email').value;
    const password = document.querySelector('.login_pw').value;

    if((id.length > 0)&&(password.length > 0) ){
        let blueButton = document.querySelector('.login_btn');
        blueButton.style.backgroundColor = '#0095F6';
    }
});

