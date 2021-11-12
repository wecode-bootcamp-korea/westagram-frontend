"use strict";

let name = document.querySelector("#name").value;
let result = document.querySelector("#result");

function newComment() {
  document.getElementById("result").innerText = name;
}

reactComment.addEventListener("keydown", newComment);
