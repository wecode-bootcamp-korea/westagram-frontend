const inputContainer = document.querySelector('.login-input-container');
const inputs = document.querySelectorAll('.login-input');
const loginBtn = document.querySelector('.login-btn');

(function app() {
    let isValue = false;

    inputContainer.addEventListener('keyup', () => {
        if(event.target.classList.in)
        inputs.forEach(elem => {
            if(elem.value !== '') isValue = true;
            else isValue = false;
        })
        if(isValue) loginBtn.classList.add('active');
        else loginBtn.classList.remove('active');
    })    
})();

