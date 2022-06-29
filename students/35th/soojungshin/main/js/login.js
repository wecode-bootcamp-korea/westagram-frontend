"use strict";

const id = document.getElementById('id');
const pw = document.getElementById('pw');

const btn=document.getElementById('submit');


function checkIdPw() {
    if (id.include("@") && pw.length >= 6) {
        return alert "로그인한다";
    else    //서브밋 버튼의 컬러를 바꿔줄거야..를 뭐라고 작성해야함?
    }
};

// 사용자가 작성을 작했을 때를 캐치해야함.. 이부분도이해 못함
id.addEventListener('keyup', checkIdPw);
pw.addEventListener('keyup', checkIdPw);

// const checkIdPw = () => {
//     id.value.includes("@")
// }