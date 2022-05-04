const userEmail = document.querySelector('#user_email');
const userPasswd = document.querySelector('#user_passwd');
const submitBtn = document.querySelector('#submit-btn');
const DISABLE = "disabled";

userEmail.addEventListener('input', isDisable);
userPasswd.addEventListener('input', isDisable);

function isDisable(){
    submitBtn.disabled = canLogIn(userEmail, userPasswd) ? false : true;
    submitBtn.disabled ?  submitBtn.classList.add(DISABLE) : submitBtn.classList.remove(DISABLE);
}
function canLogIn(user_id, user_passwd){
    if(user_id.value.includes('@') && user_passwd.value.length > 6 ){
        return true;
    }else{
        return false;
    }
}