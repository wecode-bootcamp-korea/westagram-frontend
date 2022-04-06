const loginId =document.querySelector(".input-id");
const loginBtn = document.querySelector(".login-button");

const form =document.querySelector(".login-form");

form.addEventListener('keyup',function(){
    const valueId =document.querySelector(".input-id").value;
    const valuePw =document.querySelector(".input-pw").value;
    if (valueId  && valuePw){
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor ="red";
    }else{
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor ="#c0dffd";
    }
})
