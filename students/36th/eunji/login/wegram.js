


const loginId = document.querySelector(".putLogin")
const loginPw = document.querySelector(".putPw");
const loginBtn = document.querySelector("button");


loginBtn.disabled = true;

function listener(){
    loginId === "" && loginPw === "" ? loginBtn.disabled = true  : loginBtn.disabled = false;
}


loginId.addEventListener("keyup",listener)
loginPw.addEventListener("keyup",listener)



// loginId.addEventListener('keyup', function(){
//     const idValue = loginId.value;
//     const pwValue = loginPw.value;

//     if(idValue.length >0 && pwValue.length > 0){
//     button.style.backgroundColor = '#0295f6'
//     }
//     else{}
// })


// loginPw.addEventListener('keyup', function(){
//     const idValue = loginId.value;
//     const pwValue = loginPw.value;

//     if(idValue.length>0 && pwValue.length >= 0){
//       //이제 .button 태그의 css 속성 중 background-color만 변경해주기!
//     button.style.backgroundColor = '#0295f6'
//     }
//     else{}





// function activeLogin (){

//     let idvalue = loginId.value
//     let pwvalue = loginPw.value

//     (idvalue&&pwvalue)&&(pwvalue.length>4) ? loginBtnColored.add('login_active') : loginBtn.classList.remove('login_active')

// }


// loginId.addEventListener('keyup', activeLogin);
// loginPw.addEventListener('keyup', activeLogin);











// function listener(){
//     loginId.length >0 && loginPw.length >0 ? loginBtn.disabled = false  : loginBtn.disabled = true;
// }



// function listenercolor(){
//     loginId.value === "" && loginPw.value === "" ? loginBtnColored.disabled = true : loginBtnColored.disabled = false;
// }


// // function listener() {
// //     if(loginId === "" && loginPw === ""){
// //         loginBtn.disabled = true;
// //     }
// //     else{
// //         loginBtn.disabled = false;
// //     }
// // }




// loginId.addEventListener("keyup",listener)
// loginPw.addEventListener("keyup",listener)
// loginBtnColored.addEventListener("keyup",listenercolor)