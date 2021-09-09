

// const activated  = (el) => {
//   user_id.innerHTML = el;
//   console.log(user_id);
//   // console.log(el);
//   // user_id.value += el.keyCode;
//   // console.log(el.key);
// }

// user_id.addEventListener('keyup', activated);
// user_pw.addEventListener('keyup', activated);
// console.log(user_id.vlaue);


// user_pw.addEventListener('keydown', function(){

//   if(user_id.value && user_pw.value){
//     // loginButton.disabled = false;
//     loginButton.style.backgroundColor = "blue";
//     console.log(loginButton);
//   } else {
//     loginButton.disabled = 'disabled'
//     // loginButton.style.opacity = 0.5;
//   }

// })

// console.log(user_pw);
//////////////
let user_id = document.querySelector(".id");
let user_pw = document.querySelector(".pw");
let loginButton = document.querySelector(".login");

function Button() {
  let idValue = user_id.value;
  let pwValue = user_pw.value;

  if(idValue.length > 0 && pwValue.length > 0){
    loginButton.disabled = false;
    loginButton.style.cursor = "pointer";
    loginButton.style.backgroundColor = "blue";
  } else{
    loginButton.disabled = true;
    loginButton.style.cursor = "default";
    loginButton.style.backgroundColor = "#C4E1FB";
  }
}

loginButton.addEventListener("click", function(){
  location.href="main.html";
});

user_id.addEventListener('keyup', Button);
user_pw.addEventListener('keyup', Button);
///////////////
