document.addEventListener('DOMContentLoaded', function() {
    const idInput = document.querySelector('.loginField');
    const pwInput = document.querySelector('.passwordField');
    const loginBtn = document.querySelector('.loginBtn');

    idInput.addEventListener('input', checkActivation);
    pwInput.addEventListener('input', checkActivation);

    function checkActivation() {
        if (idInput.value.length > 0 && pwInput.value.length >= 8) {
            loginBtn.disabled = false;
            loginBtn.classList.add('active');
        } else {
            loginBtn.disabled = true;
            loginBtn.classList.remove('active');
        }
    }
});
