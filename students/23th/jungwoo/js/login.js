// Input 텍스트 입력시 버튼 활성화
let idInput = document.getElementsByClassName('boxProperty')[0];
let pwInput= document.getElementsByClassName('boxProperty')[1];

idInput.addEventListener('keyup', handleInput);
pwInput.addEventListener('keyup', handleInput);

function handleInput(keyNum) {
    if (idInput.value.length >= 8 && pwInput.value.length > 10) {                 
        let loginBtn = document.getElementById('btn');
        loginBtn.dsabled = false;
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.style.cursor = 'pointer';

        if(keyNum.code === 'Enter') {
            location.replace('http://10.58.59.183:5500/students/23th/jungwoo/main.html');                        
        }
            else {
            loginBtn.dsabled = true;
            loginBtn.style.backgroundColor = "#0095F6";
            loginBtn.style.cursor = 'default';           
        }
    }
};

