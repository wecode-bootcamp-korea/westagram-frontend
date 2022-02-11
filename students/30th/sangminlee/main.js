
const btnConfirm = document.getElementById('btnConfirm');



btnConfirm.onclick=function(){
    console.log('heel');
    
    const commentValue = document.getElementById('comment').value;
    document.getElementById('title').innerHTML += '<li>'+commentValue+'</li>';
}

function enterkey(event){
    let key = event.key || event.keyCode;

    if(key == 13){
        
    }
}



