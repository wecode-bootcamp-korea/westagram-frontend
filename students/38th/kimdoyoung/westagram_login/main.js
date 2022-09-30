const idinput1 = document.getElementById('idinput');
const pwinput1 = document.getElementById('pwinput');
const loginbutton = document.getElementById("loginbutton");


idinput1&&pwinput1.addEventListener('keyup',keyupEvent);

function keyupEvent(){
  if (!(idinput.value.includes("@") && pwinput.value.length>=5)) {
    loginbutton.disabled = true;
  } else{
    loginbutton.disabled = false;
  }
}


//keyupEvent를 else if로 했을때  조건문 >> ((idinput.value.includes("@") && pwinput.value.length>=5)) g