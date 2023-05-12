const userInput = document.getElementById('userInput');

function hasUserIdAndPassword() {
    const button = document.getElementById('loginBtn');
    (userId.value.includes('@') && password.value.length >= 5) ? button.disabled = false : button.disabled = true;   
    console.log(userId.value.includes('@'));
    console.log(password.value.length >= 5)
}   

userInput.addEventListener('keyup', hasUserIdAndPassword);
