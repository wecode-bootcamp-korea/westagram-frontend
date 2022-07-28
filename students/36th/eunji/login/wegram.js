


const loginId = document.querySelector(".putLogin");
const loginPw = document.querySelector(".putPw");
const loginBtn = document.querySelector("button");

loginBtn.disabled = true;



function listener(){
    loginId === "" && loginPw === "" ? loginBtn.disabled = true : loginBtn.disabled = false
}




// function listener() {
//     if(loginId === "" && loginPw === ""){
//         loginBtn.disabled = true;
//     }
//     else{
//         loginBtn.disabled = false;
//     }
// }

loginId.addEventListener("keyup",listener)
loginPw.addEventListener("keyup",listener)
