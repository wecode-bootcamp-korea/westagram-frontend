const idForm = document.getElementsByClassName(".inputId");
const pwForm = document.getElementsByClassName(".inputPw");
const loginBtn = document.getElementsByClassName(".inputBtn");

function activeEvent(){
  if(!(idForm.value && pwForm.value)) {
    button.disabled.remove = ture;
  }else {
    button.disabled = false;
  }

  if (!(idForm.value && pwForm.value)) {
    button.inputBtn.remove("buttonLoginDisabled")
  }else {
    button.inputBtn.add("buttonLoginDisabled")
  }
}

idForm.addEventListener("keyup", activeEvent);
pwForm.addEventListener("keyup", activeEvent);


/*function activeEvent() {
  switch (!(idForm.value && pwForm.value)) {
    case true:
      loginBtn.disabled = false;
      break;
    case false:
      loginBtn.disabled = true;
      break;
  }
}

idForm.addEventListener("keyup", activeEvent);
pwForm.addEventListener("keyup", activeEvent);
loginBtn.addEventListener("keyup", activeEvent);

function eventActive(){

}
