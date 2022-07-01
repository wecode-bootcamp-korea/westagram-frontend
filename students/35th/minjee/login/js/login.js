"use strict";

const thisIsId = document.getElementById('loginId');
const thisIsPw = document.getElementById('loginPW');
const thisIsButton = document.getElementById('loginButton');
const thisIsForm = document.getElementById('loginForm');

// Login
// 로그인 버튼 활성화
function login() {
    if (thisIsId.value.includes('@') && thisIsPw.value.length >= 5) {
        thisIsButton.disabled = false;//버튼활성화
        thisIsButton.classList.add('active');//color 투명도 높이는 class추가
    } else {
        thisIsButton.disabled = true;
        thisIsButton.classList.remove('active');
    }
}

//로그인 버튼 Click 시, main page로 이동.
function moveMain() {
    location.href = '../main/main.html';
}

thisIsForm.addEventListener('input', login);
thisIsButton.addEventListener('click', moveMain);