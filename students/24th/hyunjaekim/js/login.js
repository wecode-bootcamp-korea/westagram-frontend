const loginContainer = document.querySelector('.loginContainer');

loginContainer.addEventListener("keyup",()=>{
    const userID = document.querySelector('.userID').value;
    const userPW = document.querySelector('.userPW').value;
    const loginBtn = document.querySelector(".loginBtn");

    userID.length > 4 && userPW.length > 4 
        ? loginBtn.classList.add('active') 
        : loginBtn.classList.remove('active');
});