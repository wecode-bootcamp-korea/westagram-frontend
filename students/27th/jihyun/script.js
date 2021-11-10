const $id = document.querySelector('#id');
const $password = document.querySelector('#password');
const $loginForm = document.querySelector('.login-form');
const $loginBtn = document.querySelector('.login-btn');


/*
 * 1. 아이디를 입력한다.
 * 2. 비밀번호를 입력한다.
 * 3. 입력한 값을 아이디라는 변수에 저장한다. * 
 * 4. 입력한 값을 비밀번호라는 변수에 저장한다. 
 * 5. 아이디가 1자 이상임을 체크한다.
 * 6. 그리고 비밀번호가 1자 이상이다. 
 * */


$loginForm.addEventListener('keyup', function () {
    if ($id.value.length === 0 || $password.value.length === 0) {
        $loginBtn.style.backgroundColor = "#B2DFFC";
        return;
    }
    else if ($id.value.length >= 1 && $password.value.length >= 1) {
        $loginBtn.style.backgroundColor = "blue";
        return;
    }
    
})

