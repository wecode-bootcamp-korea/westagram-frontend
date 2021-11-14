const $id = document.querySelector('#id');
const $password = document.querySelector('#password');
const $loginForm = document.querySelector('.login-form');
const $loginBtn = document.querySelector('.login-btn');



$loginForm.addEventListener('keyup', function () {
    if ($id.value.length === 0 || $password.value.length === 0) {
        $loginBtn.style.backgroundColor = "#B2DFFC";
        return;
    }
    else if ($id.value.length >= 1 && $password.value.length >= 1) {
        $loginBtn.style.backgroundColor = "blue";



        function OnClickLoginBtn() {
            event.preventDefault();
            location.href = "main.html";
        }

        $loginBtn.addEventListener('click', OnClickLoginBtn);

        
    }
    
})




