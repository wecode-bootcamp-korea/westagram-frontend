'use strict;'
const loginInfo = document.querySelector(".loginBox");
const thisIsBtn = document.querySelector('.loginBtn');

thisIsBtn.disabled= true;
thisIsBtn.style.backgroundColor = "rgba(var(--d69,0,149,246),.3)"; 

loginInfo.addEventListener('keyup',function(){

  const thisIsID = document.querySelector('.id').value;
  const thisIsPW = document.querySelector('.password').value;

  ((!thisIsID === false) && (!thisIsPW ===false)) ? (
    thisIsBtn.disabled = false,
    thisIsBtn.style.backgroundColor = "rgba(var(--d69,0,149,246),1)"
    ) : (
    thisIsBtn.disabled= true,
    thisIsBtn.style.backgroundColor = "rgba(var(--d69,0,149,246),.3)",
    thisIsBtn.style.cursor = "Pointer"
    )
  })
