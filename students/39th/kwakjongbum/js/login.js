let inpId = document.querySelector('.input-id');
let inpPw = document.querySelector('.input-pw');
let lgBtn = document.querySelector('.btn-login');

inpId.addEventListener('keyup', function(){
    if(this.value && inpPw.value && (this.value).includes('@') && (inpPw.value).length >= 5){
        lgBtn.disabled = false;
    }else{
        lgBtn.disabled = true;
    }
});

inpPw.addEventListener('keyup', function(){
    if(inpId.value && this.value && (inpId.value).includes('@') && (this.value).length >= 5){
        lgBtn.disabled = false;
    }else{
        lgBtn.disabled = true;
    }
});