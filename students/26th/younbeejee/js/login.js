const userId = document.querySelector("#password");
const userPw = document.querySelector("#re-password");
const loginbtn = document.querySelector(".login-btn")

function check() {
   if(userId.value.length > 0 && userPw.value.length > 0){
    loginbtn.style.backgroundColor= "#0095F6";
   } else{
   loginbtn.style.backgroundColor= "#B2DFFC";
   }
}
   userId.addEventListener("keyup", check);

   userPw.addEventListener("keyup", check);
   
check();