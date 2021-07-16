"use strict";

const inputInfo = document.querySelector("#userInfo");
const inputPw = document.querySelector("#userPw");
const button = document.querySelector(".inputButton");

/*
inputInfo.addEventListener('keypress', (event) => {
    inputPw.addEventListener('keypress', (event) => {
        button.removeAttribute('disabled');
    })
});
*/

inputInfo.addEventListener("keyup", function(e) {
    if(inputInfo.value && inputPw.value) {
        button.removeAttribute("disabled");
    } else {
        button.disabled = true;
    }
})

inputPw.addEventListener("keyup", function(e) {
    if(inputInfo.value && inputPw.value) {
        button.removeAttribute("disabled");
    } else {
        button.disabled = true;
    }
})
