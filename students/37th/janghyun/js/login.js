const getIdInput = document.getElementsByClassName('idInput')[0];
const getPasswordInput = document.getElementsByClassName('pwInput')[0];
const getLoginButton = document.getElementById('loginBtn');
const findDisabled = getLoginButton.hasAttribute('disabled');

// console.log(findDisabled);

function getValue() {
    const idValue = getIdInput.value;
    const idValue2 = getIdInput.value.indexOf('@');;
    const pwValue = getPasswordInput.value;

    console.log(idValue, pwValue, idValue2);
    
    if((idValue.indexOf('@') >= 0) && pwValue.length > 5) {
        getLoginButton.removeAttribute('disabled');
        getLoginButton.setAttribute('href');
    } else {
        if(findDisabled) {
            getLoginButton.setAttribute('disabled', "");
        }
    }
};

getIdInput.addEventListener('keyup', getValue);
getPasswordInput.addEventListener('keyup', getValue);