const thisIsId = document.getElementsByClassName('id')[0];
const thisIsPw = document.getElementsByClassName('password')[0];
const thisIsButton = document.getElementsByClassName('button')[0];

document.addEventListener("keyup", function(e){
    if(thisIsId.value && thisIsPw.value ) {
        thisIsButton.style.backgroundColor = "#0095f6";
    }else{
        thisIsButton.style.backgroundColor = "#c4e1f7";
    }
}) 
