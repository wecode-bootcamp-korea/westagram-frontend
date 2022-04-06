const Id = document.querySelector(".inputId");
const Pwd = document.querySelector(".inputPwd");
const loginbtn = document.querySelector(".login_btn");


Id.addEventListener("keyup",active)
Pwd.addEventListener("keyup",active)

function active() {
    if(Id.value.length !== 0 && Pwd.value.length !== 0){
        loginbtn.disabled = false;
    }else {
        loginbtn.disabled = true;
    }
}
