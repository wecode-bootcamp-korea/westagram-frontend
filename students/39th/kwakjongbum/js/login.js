let inpId = document.querySelector('.input-id');
let inpPw = document.querySelector('.input-pw');
let lgBtn = document.querySelector('.btn-login');

function inpIdChk(){
    if(this.value && inpPw.value && (this.value).includes('@') && (inpPw.value).length >= 5){
        lgBtn.disabled = false;
    }else{
        lgBtn.disabled = true;
    }
};

function inpPwChk(){
    if(inpId.value && this.value && (inpId.value).includes('@') && (this.value).length >= 5){
        lgBtn.disabled = false;
    }else{
        lgBtn.disabled = true;
    }
};

inpId.addEventListener('input', inpIdChk);
inpPw.addEventListener('input', inpPwChk);