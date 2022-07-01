const thisIsId = document.getElementsByClassName('id')[0];
const thisIsPw = document.getElementsByClassName('password')[0];
const thisIsButton = document.getElementsByClassName('button')[0];

document.addEventListener("keyup", function(e) {
    return (!thisIsId.value) || (thisIsPw.value.length < 5) || (thisIsId.value.indexOf("@") <0) ? thisIsButton.style.backgroundColor = "#c4e1f7"
    :  thisIsButton.style.backgroundColor = "#0095f6"
})