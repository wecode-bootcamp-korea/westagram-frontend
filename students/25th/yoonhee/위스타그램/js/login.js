const id = document.querySelector('.log-in__id');
const ps = document.querySelector('.log-in__ps');
const btn =document.querySelector('.btn');

const login = document.querySelector('.log-in');


function cheakInput(){

    let idIn = id.value;
    let psIn = ps.value;

    (idIn.length && psIn.length) >= 1 ? btn.disabled = false : true ;
}



login.addEventListener("keyup",cheakInput);




