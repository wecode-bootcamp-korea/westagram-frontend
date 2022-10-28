const id = document.querySelector(".id")
const ps = document.querySelector(".ps")
const button = document.querySelector(".button")

 function loginEvent(){
  if(id.value.length >= 4 && ps.value.length >=8){
    button.disabled = false;
    window.location.href="page.html";
  } else{
    button.disabled = true;
  }
 };

function onKeyUp(){
  if(window.event.keyCode == 13){
     onKeyUp();
  }
}

function handleSubmit(){
  submit.preventDefault()
}

id.addEventListener("keyup",loginEvent)
ps.addEventListener("keyup",loginEvent)
button.addEventListener("submit", handleSubmit);