const loginId =document.querySelector(".input-id");
const loginBtn = document.querySelector(".login-button");

const form =document.querySelector(".login-form");

form.addEventListener('keyup',function(){
    const valueId =document.querySelector(".input-id").value;
    const valuePw =document.querySelector(".input-pw").value;

    if (valueId.includes("@") && valuePw.length >= 5) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor ="#0095f6";
    }else{
         loginBtn.disabled = true;
        loginBtn.style.backgroundColor ="#c0dffd";
    }
});

