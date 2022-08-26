const $instagramLogo = document.querySelector('.instagramLogo');
const $closeBtn = document.querySelector('.closeBtn');
const $directInput = document.querySelector('.directInput');
const $directInputBox = document.querySelector('.directInputBox');
const $thisIsForDirect = document.querySelector('.thisIsForDirect');
const $iconBox = document.querySelector('.iconBox');
const $profileIcon = document.querySelector('.profileIcon');
const $nickName = document.querySelector('.nickName');

//다시 메인을 가기 함수
function goMain () {
    location.href = 'http://127.0.0.1:5500/students/37th/juwonChoi/main.html'    
}

//다이렉트메세지 인풋 변화
function sendDirectMsg () {
        $iconBox.style.display = "none";
        $directInputBox.style.width = "100%";
        $thisIsForDirect.style.zIndex = "1";
}
//
function cancelDirectMsg () {
        $iconBox.style.display = "flex";
        $directInputBox.style.width = "208px";
        $thisIsForDirect.style.zIndex = "-1";
}


function init () {
    $instagramLogo.addEventListener('click', goMain);
    $closeBtn.addEventListener('click', goMain);
    $directInput.addEventListener('focus', sendDirectMsg);
    $directInput.addEventListener('focusout', cancelDirectMsg);
    $profileIcon.addEventListener('click', goMain);
    $nickName.addEventListener('click', goMain);
}

init();

