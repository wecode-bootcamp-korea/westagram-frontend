const username = document.querySelector('.username');
const pwd = document.querySelector('.pwd');
const loginBtn = document.querySelector('.login-btn');
const BTN_ACTIVATE ="btn-activate";

const handleBtnActivate = (e) =>{
   e.value=username.value;
   username.value && pwd.value? loginBtn.classList.add(BTN_ACTIVATE) : loginBtn.classList.remove(BTN_ACTIVATE)
};

const checkId=()=>{
    if(username.value.indexOf("@")== -1) return false;
    else return true;
}
const checkPwd=()=>{
    if(pwd.value.length<5) return false;
    else return true;
}

const loginSuccess=()=>{
    localStorage.setItem("ID",username.value);
    window.location ="main.html"
}
const handleSubmit =(e)=>{
    e.preventDefault();
    checkId() && checkPwd() ? loginSuccess(): alert("사용자이름과 비밀번호를 확인하세요")
}

username.addEventListener("keyup",handleBtnActivate);
pwd.addEventListener("keyup",handleBtnActivate);
loginBtn.addEventListener("click", handleSubmit);
