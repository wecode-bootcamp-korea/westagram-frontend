const thisIsId = document.getElementsByClassName('id')[0];
const thisIsPw = document.getElementsByClassName('id')[1];
const thisIsButton = document.getElementsByClassName('login')[0];
const activatedButton = document.getElementsByClassName('submit-suceed')[0];


function loginValidation(){
    const inputId = thisIsId.value;
    const inputPw = thisIsPw.value;

    if(inputId.length >= 1 && inputPw.length >= 6){
       thisIsButton.classList.add('submit-suceed');
       thisIsButton.disable = false;
    }else{
        thisIsButton.classList.remove('submit-suceed');
        thisIsButton.disable = true;
    };
}

