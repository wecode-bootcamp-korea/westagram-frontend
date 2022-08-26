const instagramLogo = document.querySelector('.instagramLogo');
const closeBtn = document.querySelector('.closeBtn');

function goMain () {
    location.href = 'http://127.0.0.1:5500/students/37th/juwonChoi/main.html'    
}

function init () {
    instagramLogo.addEventListener('click', goMain);
    closeBtn.addEventListener('click', goMain);
}

init();

