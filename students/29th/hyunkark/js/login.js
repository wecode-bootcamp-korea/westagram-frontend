let id = document.querySelector('.id');
let password = document.querySelector('.password');
let submit = document.querySelector('.submit');

password.addEventListener('keyup', ()=>{
    if(id.value.includes('@')&&password.value.length>7){
        submit.disabled = false;
        submit.style.opacity = 1;
    }else{
        submit.disabled = true;
        submit.style.opacity = 0.5;
    }
})