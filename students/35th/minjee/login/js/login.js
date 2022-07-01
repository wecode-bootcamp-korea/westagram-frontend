const thisIsId = document.getElementById('loginId');
const thisIsPw = document.getElementById('loginPW');
const thisIsSubmit = document.getElementById('loginSubmit');
const thisIsForm = document.getElementById('loginForm');

// login
// 로그인 버튼 활성화
function login() {
    if(thisIsId.value.includes('@') && thisIsPw.value.length >= 5){
        thisIsSubmit.disabled = false;//버튼활성화
        thisIsSubmit.classList.add('active');//color 투명도 높이는 class추가
    } else {
        thisIsSubmit.disabled = true;
        thisIsSubmit.classList.remove('active');
    }
}
thisIsForm.addEventListener('keyup', login);


function moveMain(){
    location.href="../main/main.html";
}