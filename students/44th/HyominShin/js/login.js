const userId = document.getElementById("loginBox");
const userPassword = document.getElementById("passwordBox");

let boolUserId = false;
let boolUserPassword = false;

userId.addEventListener('keypress', function(){
    boolUserId = True;
});
userPassword.addEventListener('keypress', function(){
    boolUserPassword = True;
});

if (boolUserId && boolUserPassword === True ) {
    
}


