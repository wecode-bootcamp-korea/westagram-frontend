window.addEventListener('keyup', function() {

    const idvalue = document.getElementById('id').value;
    const passwordvalue = document.getElementById('password').value;
    const thisIsButton = document.getElementById('loginButton');

    if(idvalue.length === 0 || passwordvalue.length === 0){
        thisIsButton.disabled = true;
        console.log('a')
        thisIsButton.style.backgroundColor = "#B2DFFC";

    
    };
    
    if(idvalue.length > 0 && passwordvalue.length > 0){
       thisIsButton.disabled = false;
       thisIsButton.style.backgroundColor = "#0095F6";

    };
});