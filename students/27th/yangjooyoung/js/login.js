const inputId = document.getElementsByClassName('inputId')[0];
const inputPwd = document.getElementsByClassName('inputPwd')[0];
const inputWrapper = document.getElementsByClassName('inputWrap')[0];

console.log(inputId);
console.log(inputPwd);
console.log(inputWrapper);
const button = document.getElementsByClassName('button')[0];


// inputWrapper.addEventListener('input', function() {
//         const inputIdVal = inputId.value;
//         const inputPwdVal = inputPwd.value;

//         if( inputIdVal === '' && inputPwdVal === '' ) {
//             button.disabled = true;
//         }

//         if( inputIdVal !== '' && inputPwdVal === '' ) {
//             button.disabled = true;
//         }

//         if( inputIdVal === '' && inputPwdVal !== '' ) {
//             button.disabled = true;
//         }

//         if( inputIdVal !== '' && inputPwdVal !== '' ) {
//             button.disabled = false;
//         }
//     })


inputWrapper.addEventListener('input', function() {
    const inputIdVal = inputId.value;
    const inputPwdVal = inputPwd.value;

    // if( inputIdVal === '' && inputPwdVal === '' ) {
    //     button.disabled = true;
    // }

    // if( inputIdVal !== '' && inputPwdVal === '' ) {
    //     button.disabled = true;
    // }

    // if( inputIdVal === '' && inputPwdVal !== '' ) {
    //     button.disabled = true;
    // }

    if( inputIdVal !== '' && inputPwdVal !== '' ) {
        button.disabled = false;
    }else {
        button.disabled = true;
    }
})