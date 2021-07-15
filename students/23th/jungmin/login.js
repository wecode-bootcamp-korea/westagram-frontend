let password = document.getElementById('password');
let id = document.getElementById('id');
let button = document.querySelector("Button");

button.addEventListener('click',function(){
  alert("아이디와 비밀번호가 맞을까요 ? :)")
  })
  
function test(){
  let pwValue = password.value;
  let idValue = id.value;
  if(pwValue&&idValue){
    button.disabled=false;
    button.style.backgroundColor="#0095f6";
    button.style.color="#fff";
  }
  else{
    button.disabled=true;
    button.style.backgroundColor="rgba(var(--d69,0,149,246),.3)";
    button.style.color="rgba(var(--eca,255,255,255),1)";
  }
}

password.addEventListener("keyup", test);
id.addEventListener("keyup",test);
