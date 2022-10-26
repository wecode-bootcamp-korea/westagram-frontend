const id = document.getElementsByClassName('login_id')[0];
const pw = document.getElementsByClassName('login_pw')[0];

pw.addEventListener('keyup', function (e) {
    const id = document.querySelector('.login_id').value;
    const password = document.querySelector('.login_pw').value;
    if((id.length > 0) && (password.length > 0)){
        btnChange = document.querySelector('.login_btn');
        btnChange.style.backgroundColor = '#0095F6';
    } else {
        btnChange.style.backgroundColor = '#bfdffd';
    }
})