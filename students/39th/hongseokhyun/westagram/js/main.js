

const inputId = document.querySelector("#ID");
const inputPassword = document.querySelector("#password");
const button = document.querySelector(".login_btn");

// function loginBtn(){
    // const idValue = inputId.value;
    // const passwordValue = inputPassword.value;


//     if(idValue.includes('@') && passwordValue.length >5){
//         button.disabled = false;
//         button.style.cursor = "pointer";
//         button.style.opacity = '1'; 
//     }else {
//         button.disabled = true;
//         button.style.cursor = "default";
//         button.style.opacity = '0.4';
//     }
// };

const loginBtn = () => {
    const idValue = inputId.value;
    const passwordValue = inputPassword.value;
    idValue.includes('@') && passwordValue.length >5
    ? button.disabled = false
    : button.disabled = true
}
// }

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);
// button.addEventListener('click', successLogin);

/*const 연습 = (idValue.includes('@') && passwordValue.length >5) 
연습 ? 

연습 :
*/
