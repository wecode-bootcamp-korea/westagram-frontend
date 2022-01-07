document.addEventListener('input', function(){
    const idBtn = document.getElementsByClassName("id-write-box")[0];
    const pwBtn = document.getElementsByClassName("pw-write-box")[0];
    const loginBtn = document.getElementById('login-btn');
    const idTxt = document.getElementsByClassName("id-action-txt")[0];
    const pwTxt = document.getElementsByClassName("pw-action-txt")[0];

    if(idBtn.value.length >= 1 && pwBtn.value.length >= 5 && idBtn.value.includes('@')){
        loginBtn.style.opacity = "1";
        loginBtn.style.cursor = "pointer";
        loginBtn.style.pointerEvents = "auto";
    }else{
        loginBtn.style.opacity = "0.5";
        loginBtn.style.cursor = "default";
        loginBtn.style.pointerEvents = "none";
    }

    const TxtAction = (btn, txt) => btn.value.length >= 1 ? txt.style.display = "none" : false;
    TxtAction(idBtn, idTxt);
    TxtAction(pwBtn, pwTxt);
})