let idElement =document.querySelector('.id');
let passElement =document.querySelector('.password');
let btn = document.querySelector('.btn');

passElement.addEventListener('keyup', function(e) {
    if(idElement.value.length>3 && passElement.value.length> 4){
        btn.style.backgroundColor= "rgb(0,150,252)";
    }
    else if(idElement.value.length<4 || passElement.value.length <5){
        btn.style.backgroundColor='rgb(201, 224, 249)';
    }
});