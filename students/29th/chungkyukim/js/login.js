
const password=document.querySelector('#inputid');
const usermail=document.querySelector('#inputpw');
const loginbar=document.querySelector('#login');
loginbar.disabled='true';

password.addEventListener('input', activelogin);
usermail.addEventListener('input', activelogin);
    
function activelogin() {
    (!password.value  || !usermail.value) ? loginbar.disabled=true :  loginbar.disabled=false;
}
    



