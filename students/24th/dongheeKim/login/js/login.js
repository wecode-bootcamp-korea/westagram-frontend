'use strict;'
const loginInfo = document.querySelector(".loginBox");
const thisIsBtn = document.querySelector('.loginBtn');

thisIsBtn.disabled= true;
thisIsBtn.style.backgroundColor = "lightskyblu"; 

loginInfo.addEventListener('keyup',function(){

    const thisIsID = document.querySelector('.id').value;
    const thisIsPW = document.querySelector('.password').value;

    if((!thisIsID === false) && (!thisIsPW ===false)){
        thisIsBtn.disabled = false;
        thisIsBtn.style.backgroundColor = "blue";
    } else {
        thisIsBtn.disabled= true;
        thisIsBtn.style.backgroundColor = "lightskyblue"; 
    } 
    }
)
