let inpId = document.querySelector('.input-id');
let inpPw = document.querySelector('.input-pw');
let lgBtn = document.querySelector('.btn-login');
let str = "@";

inpId.addEventListener('keyup',function(){
    if(!(inpId.value && inpPw.value)){
        lgBtn.disabled = true;
    }else{
        lgBtn.disabled = false;
    }
})

inpPw.addEventListener('keyup',function(){
    if(!(inpId.value && inpPw.value)){
        lgBtn.disabled = true;
    }else{
        lgBtn.disabled = false;
    }
})

inpId.addEventListener('keyup',function(){
    if((inpId.value).includes('@')){
        console.log('@')
    }
})