const thisIsId = document.getElementsByClassName('login')[0];
const thisIsPw = document.getElementsByClassName('password')[0];
const thisIsButton = document.getElementsByClassName('loginButton')[0];


thisIsId.addEventListener('keyup', listener);
thisIsPw.addEventListener('keyup', listener);
//keyup이벤트가 발생했을 때 listener함수 실행

function listener() {
    switch (!(thisIsId.value && thisIsPw.value)) {
        case true: 
        thisIsButton.disabled = true; 
        break;

        case false: 
        thisIsButton.disabled = false; 
        break;
    }
}

