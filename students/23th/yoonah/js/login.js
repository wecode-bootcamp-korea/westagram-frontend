        // let loginBtn = document.getElementsByClassName('login-button')[0];
        // let inputId = document.getElementById('input-id');
        // let inputPassword = document.getElementById('input-password');

        // function buttonColor(){

	    //     let idValue = inputId.value;
	    //     let passwordValue = inputPassword.value;

        
        //     if (idValue.length > 0 && passwordValue.length > 0) {
        //         loginBtn.style.backgroundColor = 'blue';
        //     } else {
        //         loginBtn.style.backgroundColor = 'skyblue';  
        //     }
        //     }

        // inputId.addEventListener('keyup', buttonColor);
        // inputPassword.addEventListener('keyup', buttonColor);


let loginBtn = document.getElementsByClassName('loginButton')[0];
let inputId = document.getElementById('inputId');
let inputPassword = document.getElementById('inputPassword');

function buttonColor() {
    let testId = inputId.value;
    let testPassword = inputPassword.value;
    if(testId.length > 0 && testPassword.length > 0) {
        loginBtn.style.backgroundColor = 'blue';
    } else {
        loginBtn.style.backgroundColor = 'skyblue';
    }
}
inputId.addEventListener('keyup', buttonColor);
inputPassword.addEventListener('keyup', buttonColor);
// function buttonColor(){
//     let idValue = inputId.value; // ** inputId는 배열상태라 값을 가져올 수가 없음
//     let passwordValue = inputPassword.value; // ** inputId와 마찬가지
//     if (idValue.length > 0 && passwordValue.length > 0) {
//         loginBtn.style.backgroundColor = 'blue';
//     } else {
//         loginBtn.style.backgroundColor = 'skyblue';
//     }
//     }
// inputId.addEventListener('keyup', buttonColor);
// inputPassword.addEventListener('keyup', buttonColor);