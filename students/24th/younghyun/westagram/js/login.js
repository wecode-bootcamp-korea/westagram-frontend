
const loginBox = document.querySelector('.boxes');
const loginBtn = document.querySelector('.loginBtn');

loginBox.addEventListener("keyup",()=>{
    let instaId = document.querySelector('.id').value;
    let instaPw = document.querySelector('.pw').value;
    (instaId.includes('@')) && (instaId.length > 4) && ( instaPw.length > 4) ? loginBtn.classList.add('active') : loginBtn.classList.remove('active');

});





