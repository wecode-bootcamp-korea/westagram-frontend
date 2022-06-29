const thisIsId = document.getElementById('loginId');
const thisIsPw = document.getElementById('loginPW');
const thisIsSubmit = document.getElementById('loginSubmit');
const thisIsForm = document.getElementById('loginForm');

thisIsForm.addEventListener('keyup', () => {
    if(thisIsId.value && thisIsPw.value){
        thisIsSubmit.disabled = false;//활성화
        thisIsSubmit.classList.add('active');//색바뀌는거
    } else {
        thisIsSubmit.disabled = true;
        thisIsSubmit.classList.remove('active');
    }
});

function moveMain(){
    location.href="../main/main.html";
}