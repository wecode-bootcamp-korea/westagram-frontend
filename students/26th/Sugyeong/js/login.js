"use strict";

const inputId = document.getElementById("login__id");
const inputPw = document.getElementById("login__pw");
const clickBtn = document.getElementById("login__btn");
const loginBox = document.getElementsByClassName("login__form")[0];

loginBox.addEventListener("input", function() {
  const loginId = inputId.value;
  const loginPw = inputPw.value;

  loginId.length > 0 && loginPw.length >= 6 ?
  clickBtn.disabled = false :
  clickBtn.disabled = true ;
});