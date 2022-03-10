const id = document.getElementsByClassName('id')[0]
const pw = document.getElementsByClassName('password')[0]


id.addEventListener('keydown', function(){
    const idV = id.value.length;
    const pwV = pw.value.length;
    const btn = document.getElementsByClassName('wrap off button')[0];
    if(idV>=0 && pwV>=0){
        btn.className="wrap button";

    }else{
        btn.className="wrap off button";
    }
    
})