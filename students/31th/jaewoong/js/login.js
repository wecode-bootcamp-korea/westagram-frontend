const username = document.querySelector('.username');
const pwd = document.querySelector('.pwd');
const loginBtn = document.querySelector('.login-btn');
const BTN_ACTIVATE ="btn-activate";

const handleBtnActivate = (e) =>{
   e.value=username.value;
   username.value && pwd.value? loginBtn.classList.add(BTN_ACTIVATE) : loginBtn.classList.remove(BTN_ACTIVATE)
};

const loginSuccess=()=>{
    localStorage.setItem("ID",username.value);
    window.location ="main.html"
}
const handleSubmit =()=>{
    username.value && pwd.value ? loginSuccess() : alert("사용자이름과 비밀번호를 확인하세요")
}

username.addEventListener("keyup",handleBtnActivate);
pwd.addEventListener("keyup",handleBtnActivate);
loginBtn.addEventListener("click", handleSubmit);
