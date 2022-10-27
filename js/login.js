
    let idBox = document.querySelector('.idinput');
    let pwBox = document.querySelector('.pwinput');
    let loginBtn = document.querySelector('.loginbtn');
    let input = document.querySelector('input');

function turnBlue(){
    if(pwBox.value.length>5 && idBox.value.length>0){
        loginBtn.removeAttribute('disabled');
        loginBtn.style.backgroundColor= '#0095f6'; 
        loginBtn.style.cursor='pointer';
    }else{
        loginBtn.style.backgroundColor= '#c0dffd'; 
        loginBtn.setAttribute('disabled','');
        loginBtn.style.cursor='default';
    }
}
 
idBox.addEventListener('keyup', turnBlue);
pwBox.addEventListener('keyup', turnBlue);
