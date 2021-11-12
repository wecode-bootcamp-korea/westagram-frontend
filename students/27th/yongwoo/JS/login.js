const nameBtn = document.querySelector('.userName');
const passwordBtn = document.querySelector('.userPassword');
const loginBtn = document.querySelector('.loginBtn');

nameBtn.addEventListener('keyup', function(){
    let nameLength = nameBtn.value.length;
    let passwordLength = passwordBtn.value.length;

    if(nameLength >= 1 && passwordLength >= 5 && nameBtn.value.indexOf('@') !== -1 ){
        loginBtn.style.backgroundColor = "#0095f6";        
    } else {
        loginBtn.style.backgroundColor = "#b2dffc";
    }
});

passwordBtn.addEventListener('keyup', function(){
    let nameLength = nameBtn.value.length;
    let passwordLength = passwordBtn.value.length;

    if(nameLength >= 1 && passwordLength >= 5 && nameBtn.value.indexOf('@') !== -1){
        loginBtn.style.backgroundColor = "#0095f6";        
    } else {
        loginBtn.style.backgroundColor = "#b2dffc";
    }
});

function goMain(){
    location.href = "main.html";
}
loginBtn.addEventListener('click', goMain)