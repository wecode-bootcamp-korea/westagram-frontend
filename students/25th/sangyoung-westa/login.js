
let inputArray= document.querySelectorAll("input");

inputArray.forEach(function(e) {
    e.addEventListener("keyup", function() {
        const pwBar = document.getElementsByTagName("input")[1].value;
        const idBar = document.getElementsByTagName("input")[0].value;
        
        if(idBar.length >=1 && pwBar.length >= 1){
    
            let title = document.getElementsByTagName('button')[0];
            title.className = 'button-change';
         }
         return;

    });
});