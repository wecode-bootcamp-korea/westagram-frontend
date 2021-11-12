const inputId = document.getElementsByClassName("inputId")[0];
const inputPwd = document.getElementsByClassName("inputPwd")[0];
const inputWrapper = document.getElementsByClassName("inputWrap")[0];

// console.log(inputId);
// console.log(inputPwd);
// console.log(inputWrapper);

const button = document.getElementsByClassName("button")[0];

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
const handleBtn = (e) => {
  if (e.code === "Space") {
    e.preventDefault();
  }
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

  // if( inputIdVal.length !== 0 && inputPwdVal.length !== 0 ) {
  //     button.disabled = false;
  // }else {
  //     button.disabled = true;
  // }

  if (inputIdVal.length !== 0 && inputPwdVal.length !== 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }

  // if( inputIdVal.includes('@') && inputPwdVal.length !== 0 ) {
  //     button.disabled = false;
  // }else {
  //     button.disabled = true;
  // }
};

inputWrapper.addEventListener("keydown", handleBtn);
inputWrapper.addEventListener("keyup", handleBtn);
