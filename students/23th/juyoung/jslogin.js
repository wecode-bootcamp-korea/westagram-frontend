const idInput = document.getElementById("inputWrapId");
const passwordInput = document.getElementById("inputWrapPassword");
const loginButton = document.getElementById("inputWrapButton")
console.log(loginButton)
function handleInput() {
    const inValue = idInput.value;
    
    const pwValue = passwordInput.value;
    
    if (inValue.length > 0 && pwValue.length > 0 ) {
        loginButton.disabled = false;
        loginButton.style.opacity = 1;
        loginButton.style.cursor = pointer;
        
       
    } else {
        loginButton.disabled = true;
        loginButton.style.opacity = 0.5;
        
    } 



    }


idInput.addEventListener("keyup", handleInput);
passwordInput.addEventListener("keyup", handleInput);
