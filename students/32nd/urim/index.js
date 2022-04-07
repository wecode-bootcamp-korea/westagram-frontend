"use strict";

const inputId = document.querySelector(".idbox input");
const inputPw = document.getElementById("passwordbox");

inputId.addEventListener("keyup", function () {
  if (inputId.value.length >= 1 && inputId.value.length < 10) {
    document.querySelector("button").style.opacity = "1";
  }
});

inputPw.addEventListener("keyup", function () {
  if (inputPw.value.length >= 1 && inputPw.value.length < 10) {
    document.querySelector("button").style.opacity = "1";
  }
});
