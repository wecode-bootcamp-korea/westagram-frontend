const idinput1 = document.getElementById('idinput');
const pwinput1 = document.getElementById('pwinput');
const loginbutton = document.getElementById("loginbutton");


idinput1.addEventListener('keyup',function(){
    if (!(idinput.value.includes("@") && pwinput.value.length>=5)) {
        loginbutton.disabled = true;
      } else if((idinput.value.includes("@") && pwinput.value.length>=5)){
        loginbutton.disabled = false;
      }
});
pwinput1.addEventListener('keyup',function(){
    if (!(idinput.value.includes("@") && pwinput.value.length>=5)) {
        loginbutton.disabled = true;
      } else if((idinput.value.includes("@") && pwinput.value.length>=5)){
        loginbutton.disabled = false;
      }
});





//idinput.value.includes("@") && pwinput.value.length>=5

//idinput.value && pwinput.value