const thisIsId = document.querySelector('#id');
const thisIsPassword = document.querySelector('#password');
const thisIsLoginBtn = document.querySelector('.login_btn');


// id, pw에 한글자 이상 쓰면 버튼 활성화
function inputCheck(){
    const id = thisIsId.value;
    const password = thisIsPassword.value;
    
    if(id !== "" && password !== ""){
        thisIsLoginBtn.classList.add('active');
    } else {
        thisIsLoginBtn.classList.remove('active');
    }
}

thisIsId.addEventListener('keyup', inputCheck);
thisIsPassword.addEventListener('keyup', inputCheck);