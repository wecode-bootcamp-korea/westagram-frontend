'use strict';

const pw = document.getElementsByTagName('input')[1];
const btn = document.getElementsByTagName('button')[0];

pw.addEventListener('keyup', function(){
    let idValue = document.getElementsByTagName('input')[0].value;
    let pwValue = document.getElementsByTagName('input')[1].value;

   (idValue.length !==0 && pwValue.length !== 0) ? 
    btn.style.backgroundColor = '#52acfc' :
        btn.style.backgroundColor = '#c5e1fa'

})
