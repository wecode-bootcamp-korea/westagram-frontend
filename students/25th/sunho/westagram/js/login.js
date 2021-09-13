"use strict"

const id = document.getElementById("userId");
const pw = document.getElementById("password")
const button = document.getElementsByTagName("button")[0];
const inputTag = document.getElementsByTagName("input")[0];

id.addEventListener('keyup',checkPassword);
password.addEventListener('keyup',checkPassword);

function checkPassword() {
    id.value.indexOf('@') >= 0 && password.value.length >= 5 ? button.disabled= false : button.disabled=true;
}


