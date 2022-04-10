
const writecomment = document.getElementsByClassName('comment')[0];
const comlist = document.getElementsByClassName('commentlist')[0];
const btt = document.getElementsByClassName('bts')[0];




btt.addEventListener('click',function(){
    let hi = writecomment.value;
let makeli = document.createElement('li');

makeli.innerHTML =`<strong>user :</strong> ${hi}` ;

 comlist.appendChild(makeli);
 writecomment.value = '';
    });




    
writecomment.addEventListener('keydown',function(e){

if(e.code ==='Enter'){
    let hi = writecomment.value;
    let makeli = document.createElement('li');
    
    makeli.innerHTML =`<strong>user :</strong> ${hi}` ;
    
     comlist.appendChild(makeli);
      writecomment.value = '';

}

})

