const password = document.getElementById('password');
const id = document.getElementById('id');
const button = document.querySelector("Button");
let test = function(){
  let pwValue = password.value, idValue = id.value;
    pwValue&&idValue?(
      button.disabled=false,
      button.style.backgroundColor="#0095f6",
      button.style.color="#fff"
    ) : (
      button.disabled=true,
      button.style.backgroundColor="rgba(var(--d69,0,149,246),.3)",
      button.style.color="rgba(var(--eca,255,255,255),1)"
    );
}
button.addEventListener('click',function(){
  alert("아이디와 비밀번호가 맞을까요 ? :)")
  })
password.addEventListener("keyup", test);
id.addEventListener("keyup",test);
