const idInput = document.getElementsByClassName('inputbox')[0];
const pwInput = document.getElementsByClassName('inputbox')[1];
const loginbtn = document.querySelector('.loginbtn');
const loginForm = document.getElementById('loginForm');
let idValue;


function loginallow(){
    if(idInput.value !=''  && pwInput.value!=''){
    loginbtn.classList.add('loginbtnallow');
    

}else{
    loginbtn.classList.remove('loginbtnallow');
}
};

function moveMain(event){
    sessionStorage.setItem('userId', idInput.value)
    console.log(idValue);
    event.preventDefault();
    location.href = './main.html'
}



window.addEventListener('keyup', loginallow)
loginForm.addEventListener('submit', moveMain);
