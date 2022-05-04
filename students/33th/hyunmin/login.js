const id = document.getElementById('id');
const password = document.getElementById('password');
const loginBtn = document.getElementsByClassName('loginBtn');

const activateLogin = () => {
    let idValue = id.value;
    let pwValue = password.value;

    if(idValue.length >= 1 && pwValue.length >= 1) {
        // document.querySelector('.loginBtn').style.backgroundColor = '#0095F6';
        document.getElementsByClassName('loginBtn')[0].style.backgroundColor = '#0095F6';
        document.getElementsByClassName('loginBtn')[0].style.cursor = 'pointer';
    } else {
        // document.querySelector('.loginBtn').style.backgroundColor = '#C0DFFD';
        document.getElementsByClassName('loginBtn')[0].style.backgroundColor = '#C0DFFD';
        document.getElementsByClassName('loginBtn')[0].style.cursor = 'default';
    }
}

password.addEventListener('keyup', activateLogin);
id.addEventListener('keyup', activateLogin);