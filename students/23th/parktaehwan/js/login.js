const loginBtn = document.getElementsByClassName("loginBtn")[0];
const idValue = document.getElementsByClassName("inputId")[0];
const pwValue = document.getElementsByClassName("inputPw")[0];
//  const inputId = document.getElementById("inputId");
// const inputPw = document.getElementById("inputPw");


function btnOn(){
    if(loginBtn.style.backgroundColor === "blue"){
        loginBtn.setAttribute('disabled','disabled');
        loginBtn.style.backgroundColor = "#c4e1fb";
    }
    if(idValue.value != "" && pwValue.value != ""){
        loginBtn.removeAttribute('disabled');
        loginBtn.style.backgroundColor = "blue";
    }
}


idValue.addEventListener("keyup",btnOn);
pwValue.addEventListener("keyup",btnOn);


//inputId.addEventListener("keyup",btnOn
// function(){
//     if(inputId.value != "" && inputPw.value != ""){
//         loginBtn.removeAttribute('disabled');
//         console.log("22");
//     }
// }
//);
//inputPw.addEventListener("keyup",btnOn
// function(){
//     if(inputId.value != "" && inputPw.value != ""){
//         loginBtn.removeAttribute('disabled');
//         console.log("22");
//     }
// }
//);