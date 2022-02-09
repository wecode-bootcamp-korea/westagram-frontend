const thisIsId = document.getElementsByClassName('login')[0];
const thisIsPw = document.getElementsByClassName('password')[0];
const thisIsButton = document.getElementsByClassName('confirm')[0];
//const thisIsAlrt = document.getElementsByClassName('alert')[0];

const isActiveLogin = () => {
    let idValue = thisIsId.value;
    let pwValue = thisIsPw.value;

    if((idValue.length > 1) && (pwValue.length > 1)) {
        thisIsButton.classList.add("login_active");
    }
    else {
        
    }
}

//   const init = () => {
//     idInput.addEventListener('input', isActiveLogin);
//     pwInput.addEventListener('input', isActiveLogin);
//     idInput.addEventListener('keyup', isActiveLogin);
//     pwInput.addEventListener('keyup', isActiveLogin);
//   }

//   init();



