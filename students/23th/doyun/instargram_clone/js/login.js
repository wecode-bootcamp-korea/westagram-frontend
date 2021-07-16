const idBtn = document.getElementsByClassName('idInput')[0];
const pwBtn = document.getElementsByClassName('passwordInput')[0];
const loginButton = document.getElementsByClassName('loginButton')[0];

const loginButtonPainer = () => {
    const thisIsId = document.getElementsByClassName('idInput')[0].value;
    const thisIsPassword = document.getElementsByClassName('passwordInput')[0].value;
    
    if (thisIsId && thisIsPassword) {
        loginButton.style.backgroundColor = '#0295F6';
        loginButton.style.cursor = 'pointer';
    }

    if (!thisIsId || !thisIsPassword) {
        loginButton.style.backgroundColor = '#C4E1FB';   
    }
}

const loginChecker = () => {
    const thisIsId = document.getElementsByClassName('idInput')[0].value;
    const thisIsPassword = document.getElementsByClassName('passwordInput')[0].value;
    
    if (thisIsId === 'doyun') {
        if (thisIsPassword === '1234') {
            alert('login success!');
            document.location.href = './main.html';
        } else {
            alert('check your password please..😞')
        }
    } else {
        alert('check your id please..😞')
    }
}


pwBtn.addEventListener('keyup', loginButtonPainer)
loginButton.addEventListener('click', loginChecker)

