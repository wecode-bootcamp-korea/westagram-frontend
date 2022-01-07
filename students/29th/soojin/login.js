function wannalogin () {
    const thisIsId = document.getElementById('westaId').value;
    const thisIsPw = document.getElementById('westaPw').value;
    const thisIsButton = document.getElementsByClassName('westaButton')[0];

    // thisIsButton.style.opacity = (!thisIsId || !thisIsPw) ? 0.5 : 1 ;
    thisIsButton.style.opacity = (thisIsId && thisIsPw) ? 1 : 0.5;

    // if (!thisIsId  || !thisIsPw) {
    //     thisIsButton.style.opacity = 0.5;
    // }
    // else {
    //     thisIsButton.style.opacity = 1;
    // }
}
document.getElementById('westaPw').addEventListener("keyup", wannalogin);