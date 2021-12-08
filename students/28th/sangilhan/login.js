const Inputid = document.getElementById('user_name');
const Inputpw = document.getElementById('user_password');
const loginBtn = document.getElementById('submit_btn');

Inputid.addEventListener('keyup', function(event) {
    if (Inputid.value.indexof('@') && Inputpw.value) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/mint/Desktop/insta-noreact/211207/index.html";
    }
    else {
        loginBtn.disabled = true;   
    }
})
Inputpw.addEventListener('keyup', function(event) {
    if (Inputid.value && Inputpw.value.length > 4) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/mint/Desktop/insta-noreact/211207/index.html";
    }
    else {
        loginBtn.disabled = true;
    }
})
