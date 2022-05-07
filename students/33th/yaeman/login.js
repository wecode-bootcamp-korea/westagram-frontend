"use strict"; //엄격모드
//로그인 버튼을 비활성화/활성화
//글자가 하나 이상일 때
//두 input창의 값이 있을 때

const inputs = document.getElementsByClassName("loginForm")[0];
const loginBtn = document.getElementById("loginBtn");

const handleInput = () => {
    const idValue = document.getElementById("id").value;
    const pwValue = document.getElementById("pw").value;

    //---내 코드--->
    const isvalidValue = checkLogin(idValue, pwValue);
    // if(isvalidValue) {
    //     handleBtn(true);
    // } else {
    //     handleBtn(false);
    // }
    console.log("~~~~",isvalidValue);
    //<----------
    
    // 원본 코드
    // const isValidId = checkValue(idValue);
    // const isValidPw = checkValue(pwValue);

    console.log("idValue:", idValue, "pwValue:", pwValue);
    // const isvalidValue = isValidId && isValidPw;

    //1.
    // if (isValidId && isValidPw) {
    //     handleBtn(true);
    // } else {
    //     handleBtn(false);
    // }
    //2.
    //return isvalidValue ? handleBtn(true) : handleBtn(false);
    //3.
    return handleBtn(isvalidValue);
};

// 원본 코드
// const checkValue = (value) => {
//     // if(value.length > 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
    
//     //삼항연산자
//     // 1. return value.length > 0? true : false;
//     return value.length > 0;
// };

const handleBtn = (isBtnValid) => {
    //3항 연산자
    loginBtn.disabled = !isBtnValid; // loginBtn.disabled = isBtnValid ? false : true;
    loginBtn.style.opacity = isBtnValid ? 1 : 0.5;
    loginBtn.style.cursor = isBtnValid ? "pointer" : "default";

    if(window.event.code === "Enter") {
        success();
    } 
};

const success = () => {
    location.href = "http://127.0.0.1:5500/main.html";
    // location.href = "file:///C:/Users/User/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/wecode/westagram-frontend/students/33th/yaeman/login.html?";
};

//---내 코드--->
const checkLogin = (id, pw) => {
    if (id.indexOf("@") >= 0 && pw.length >= 5) {
        return true;
    } else if (!id || pw.length < 5) {
        return false;
    }
};
//<----------

const init = () => {
    inputs.addEventListener("input", handleInput);
    inputs.addEventListener("keyup", handleInput);
    loginBtn.addEventListener("click", success);
};

init();