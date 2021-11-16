"use strict";

let id = document.querySelector("#id");
let pw = document.querySelector("#pw");
let button = document.querySelector("#button");

// button disabled or able
// go to main
// button click, 


function loginButtonWork() {
  if (
    document.querySelector("#id").value !== "" &&
    document.querySelector("#pw").value !== ""
  ) {
    button.disabled = true;  
    button.style.backgroundColor = "#0095f6";

    if (window.event.keyCode === 13) {
      document.querySelector("#button").click();
    };


  } else {
    button.style.backgroundColor = "#b2dffc";
  }
}

id.addEventListener("keyup", loginButtonWork);
pw.addEventListener("keyup", loginButtonWork);


function click() {
  location.href("westagramMain.html");
  // window.open("http://127.0.0.1:5500/students/27th/yeaseul/westagramMain.html")
}

// init();
