const form = document.getElementById("facebookForm");
const btn = document.querySelector("button.login");
const inputId = document.querySelector("input.idInputStyle");
const inputPwd = document.querySelector("input.pwdInputStyle");

btn.disabled = true;

form.addEventListener("keyup", () => {
    if(inputId.value.includes('@') && inputPwd.value.length>=5) {
        btn.disabled = false
        btn.style.backgroundColor ='#0095f6'
    }else {
        btn.disabled = true
        btn.style.backgroundColor ='rgba(var(--d69,0,149,246),.3)'
    }
});
