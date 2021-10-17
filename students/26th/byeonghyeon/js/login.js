const inputContainer = document.querySelector('.login-input-container');
const inputs = document.querySelectorAll('.login-input');
const loginBtn = document.querySelector('.login-btn');

(function app() {
    let isValue = false;

    inputContainer.addEventListener('keyup', (event) => {
        if(!event.target.classList.contains('login-input')) return
        inputs.forEach(elem => {
            elem.value !== '' ? isValue = true : isValue = false
            // if(elem.value !== '') isValue = true;
            // else isValue = false;
        })
        if(isValue) {
            loginBtn.classList.add('active');
            loginBtn.disabled = false;
        }
        else {
            loginBtn.classList.remove('active');
            loginBtn.disabled = 'disabled'
        }
    })    
})();

