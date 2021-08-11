
const loginBox = document.querySelector('.boxes');
const loginBtn = document.querySelector('.loginBtn');

loginBox.addEventListener("keyup",()=>{
    let instaId = document.querySelector('.id').value;
    let instaPw = document.querySelector('.pw').value;
    instaId.length && instaPw.length > 4 ? loginBtn.classList.add('active') : loginBtn.classList.remove('active');

    console.log(loginBtn.classList);
});



