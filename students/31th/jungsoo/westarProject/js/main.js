const btn = document.getElementsByClassName('commentButton')[0];
const push = document.getElementsByClassName('pushComment')[0];




btn.addEventListener('click' , function(){
const commentV = document.getElementsByClassName('commnetInput')[0].value;
const commnetP = document.createElement('li');

commnetP.innerHTML  = commentV;

push.appendChild(commnetP)


    
})