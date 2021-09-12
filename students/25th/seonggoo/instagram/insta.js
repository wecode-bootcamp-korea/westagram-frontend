
let user_id = document.querySelector(".id");
let user_pw = document.querySelector(".pw");
let loginButton = document.querySelector(".login");
let loginForm = document.getElementById("login_form");


function Button() {
  let idValue = user_id.value;
  let pwValue = user_pw.value;
 
  if(idValue.includes('@') && pwValue.length >=5 ){
    loginButton.disabled = false;
    loginButton.style.cursor = "pointer";
    loginButton.style.backgroundColor = "blue";


    // function login(e){
    //   if(e.keyCode == 13 ){
    //     location.href="main.html";
    //   }
    // }

  } else{
    loginButton.disabled = true;
    loginButton.style.cursor = "default";
    loginButton.style.backgroundColor = "#C4E1FB";
  }
}
// console.log(window.Event.keyCode == 13);
// loginButton.addEventListener('keydown', (e) => {
//   console.log(e.keyCode);
//   if(e.keyCode == 13){
//     location.href="main.html";
//   }});

loginForm.addEventListener("submit", function(event){
  event.preventDefault();
  location.href="main.html";
});




user_id.addEventListener('keyup', Button);
user_pw.addEventListener('keyup', Button);

