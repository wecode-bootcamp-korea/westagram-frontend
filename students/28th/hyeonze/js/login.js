window.onload = function(){
    let body = document.querySelector('body');
    let button = document.querySelector('button')

    body.addEventListener('keyup', function(){
        let userName = document.querySelector('.username').value;
        let userPw = document.querySelector('.userpassword').value;
        if (userName && userPw) {
            button.style.backgroundColor = '#0095F6';
            button.setAttribute('onclick', "location.href='main.html'");
        }
    });
}