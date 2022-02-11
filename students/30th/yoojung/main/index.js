



const isInput = document.getElementsById('password')[0];
const isCode = document.getElementById('code');

isInput.addEventListener('keydown', function (e) {
  isCode.innerHTML = event
})



// const thisIsButton = document.getElementsByClassName('isloginButton')[0];
// let valueMin = 5;

// thisIsInput.addEventListener('keyup', function(event) {
//   // const thisIsButton = document.getElementsByClassName('isloginButton');
//   const addId = document.getElementById('password').value;
//   const addpassword = document.getElementById('password').value;
  
//   if (addId.value < valueMin) {
//     return;
//   } else if (addpassword.value < valueMin) {
//     return;
//   } else {
//     return thisIsButton();
//   }
  
// })

const thisIsId = document.querySelector("#text");
const thisIsPwd = document.querySelector("#password");
const thisIsButton = document.querySelector(".isloginButton")

thisIsId.addEventListener('keyup', InputEvent);
thisIsPwd.addEventListener('keyup', InputEvent);


// let valueMin = 5;

// thisIsInput.addEventListener('keyup', function(event) {
//   // const thisIsButton = document.getElementsByClassName('isloginButton');
//   const addId = document.getElementById('password').value;
//   const addpassword = document.getElementById('password').value;
  
//   if ( add
  
// })

function InputEvent() {
  const thisIsButton = document.getElementsByClassName('isloginButton');
  if (thisIsId || thisIsPwd) {
    thisIsButton.length(5);
  }
}