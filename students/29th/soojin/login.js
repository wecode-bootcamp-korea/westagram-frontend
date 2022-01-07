// below is a test

// const thisIsId = document.getElementById('westaId');
// const thisIsPw = document.getElementById('westaPw');
const thisIsButton = document.getElementsByClassName('westaButton')[0];
function myFunction() {
    thisIsButton.style.opacity = '1';
}; 

thisIsButton.addEventListener("click", myFunction);