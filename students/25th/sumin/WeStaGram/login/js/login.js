
const inputId = document.getElementsByClassName("input_id")[0];
const inputPw = document.getElementsByClassName("input_pw")[0];
const button = document.querySelector(".login_Button");

function login(){
    
    let idLength = inputId.value;
    let pwLength = inputPw.value;

    if(idLength.indexOf('@') !== -1 && pwLength.length >=6){
        console.log(idLength.length)
        button.disabled = false;
        button.classList.add('btn-authorized')
    }else{
        console.log(idLength.length)
        button.disabled = true;
        button.classList.remove('btn-authorized')
    }
}




