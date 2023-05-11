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
    alert("로그인 버튼 클릭!");
    location.reload();
}