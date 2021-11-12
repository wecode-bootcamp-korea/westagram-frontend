"use strict";

let id = document.querySelector("#id"); // id@
let pw = document.querySelector("#pw");
let button = document.querySelector("#button");
//    let login=document.querySelector("#loginButton");

//    function onAndoff(){
//        if(document.querySelector("#id").value !== "" && document.querySelector('#pw').value!== ""){
//            button.disabled= false;
//            button.style.backgroundColor = "#0095f6"
//        } else {
//            button.disabled = true;
//            button.style.backgroundColor = "#b2dffc"
//        }
//    }

//   id.addEventListener('keyup', onAndoff);
//   pw.addEventListener('keyup', onAndoff);

function onAndoff() {
  if (
    document.querySelector("#id").value !== "" &&
    document.querySelector("#pw").value !== ""
  ) {
    button.disabled;
    button.style.backgroundColor = "#0095f6";
  } else {
    button.style.backgroundColor = "#b2dffc";
  }
}

id.addEventListener("keyup", onAndoff);
pw.addEventListener("keyup", onAndoff);

// if(document.querySelector('#id').value !== "" && document.querySelector('#pw').value!==""를 value.length > 0 값도 가능함.

//    function login(){

//     if(id.value.indexOf("@") != 0 && pw.value.length >= 8) {
//         document.querySelector('loginButton').disable =false;
//     } else {
//         login.disabled = ture;

//       }
//     }

//    function login(){

//     if(id.indexOf("@") != 0 && pw.length >= 8) {
//         login.disabled
//     } else {
//         login.disabled
//     }
//    }

// function login(){

//     let id=document.querySelector('#id');
//     let pw=document.querySelector('#pw');

//     if(pw.length>=8)&&(id) {
//     }
// }

// if(id.indexOf("@") != 0 && pw.length>=8) {
// }
