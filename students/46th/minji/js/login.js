function validate()  {
    const id = document.getElementById('id').value;
    const psword = document.getElementById('psword').value;
    
    if(!!(id && psword)){
        btnActive();
    }
  }

function btnActive() {
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = false;
    loginBtn.classList.remove("disableBtn");
    loginBtn.classList.add("ableBtn");

}

function login() {
    const id = document.getElementById('id').value;
    const psword = document.getElementById('psword').value;
    //id, pwd 유효성 검사
    if(id.includes("@") && psword.length > 4){
        location.href="./main.html";
    }else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
}
    