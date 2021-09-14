let user_id = document.querySelector(".id");
let user_pw = document.querySelector(".pw");
let loginButton = document.querySelector(".login");
let loginForm = document.getElementById("login_form");

function Button() {
  let idValue = user_id.value;
  let pwValue = user_pw.value;
 
  if(idValue.includes('@') && pwValue.length >= 5 ){
    loginButton.disabled = false;
    loginButton.style.cursor = "pointer";
    loginButton.style.backgroundColor = "blue";

  } else{
    loginButton.disabled = true;
    loginButton.style.cursor = "default";
    loginButton.style.backgroundColor = "#C4E1FB";
  }
}

loginForm.addEventListener("submit", function(event){
  event.preventDefault();
  location.href="main.html";
});

user_id.addEventListener('keyup', Button);
user_pw.addEventListener('keyup', Button);

