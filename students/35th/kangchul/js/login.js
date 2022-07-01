'use strict';

// 로그인페이지 이미지 변환 구현

const imgFirst = document.querySelector(".img__copy1");
const imgSecond = document.querySelector(".img__copy2");

function loginPicture() {
    if (imgFirst.classList.contains("hidden")) {
        imgFirst
            .classList
            .remove("hidden");
        imgSecond
            .classList
            .add("hidden");
    } else if (imgSecond.classList.contains("hidden")) {
        imgSecond
            .classList
            .remove("hidden");
        imgFirst
            .classList
            .add("hidden");
    }
}

setInterval(() => {
    loginPicture();
}, 3000)

// 로그인버튼 글자 입력시 활성화 구현

const loginForm = document.querySelector(".login__form");
const loginBtn = document.querySelector(".login__btn");
const inputId = document.querySelector(".id__input");
const inputPwd = document.querySelector(".pwd__input");

inputId.addEventListener("input", () => {
    inputOpacity()
})
inputPwd.addEventListener("input", () => {
    inputOpacity()
});

function inputOpacity() {
    if (inputId.value.length > 0 && inputPwd.value.length > 0) {
        loginBtn.style = "opacity :1"
    } else 
        (loginBtn.style = "opacity :0.5")
}

//로그인 이메일, 비밀번호 유효성 검사

const regEx_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

loginBtn.addEventListener("click", (e) => {
    if (!regEx_email.test(inputId.value)) {
        alert("이메일 형식이 잘못되었습니다.")

    } else if (inputPwd.value.length < 5) {
        alert("비밀번호는 5글자 이상입니다.")

    } else {
        location.href = 'main.html'
    }
})
