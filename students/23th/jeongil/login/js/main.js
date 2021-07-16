const idButton = document.getElementsByClassName("idBtn")[0]
const pwButton = document.getElementsByClassName("passwordBtn")[0]
const logIn = document.getElementsByClassName("logInButton")[0]

function handleInput(){
  const idValue = idButton.value;
  const pwValue = pwButton.value;
  
  if(idValue.length>0 && pwValue.length>0){
    logIn.style.backgroundColor = "#0095f6"
  }else{
    logIn.style.backgroundColor = "#c0dffd"
  }
}

idButton.addEventListener("input",handleInput)
pwButton.addEventListener("input",handleInput)