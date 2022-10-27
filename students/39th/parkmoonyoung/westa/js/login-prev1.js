/* 로그인 조건 충족시 버튼 활성화 */

let idForm = document.querySelector('.loginFormBox .userId');
let pwForm = document.querySelector('.loginFormBox .userPw');
let loginBtn = document.querySelector('.inputDataArea .btnLogin');

let isIdValueLength;
let isPwValueLength;

idForm.addEventListener('keyup', function(){
    isIdValueLength = idForm.value.length;
    console.log(isIdValueLength);

    loginCheck();
});

pwForm.addEventListener('keyup', function(){
    isPwValueLength = pwForm.value.length;
    console.log(isPwValueLength);
    loginCheck();
});


// /////////////////////////
function loginCheck () {
    if ( (isIdValueLength > 0) && (isPwValueLength > 0) ) {
        console.log("aa");
        loginBtn.removeAttribute('disabled');
    } else {
        console.log("아이디 또는 비번 길이 오류");
        loginBtn.setAttribute('disabled','disabled');
    }
}