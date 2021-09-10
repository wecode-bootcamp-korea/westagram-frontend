// DOM 객체에 접근 > 특정 요소를 불러와서 > 조작
// 변수, const, 고정값
// DOM method >>> getElementsByClassName, getElementById 

const thisIsButton = document.getElementsByClassName('button')[0];
const thisIsId = document.getElementById('id');
const thisIsPw = document.getElementById('pw');

function keyupFuction () {
    const inputId = thisIsId.value;
    const inputPw = thisIsPw.value;

    if (inputId.length > 0 && inputPw.length > 0) {
      thisIsButton.disabled = true;
      thisIsButton.style.backgroundColor = "#0000ff";
    }
    else {
      thisIsButton.disabled = false;
      thisIsButton.style.backgroundColor = "#c4e1fb";
    }
  }
  
thisIsId.addEventListener('keyup',keyupFuction)
thisIsPw.addEventListener('keyup',keyupFuction)


// thisIsPw.addEventListener('keyup', function() {

//     if (inputId && inputPw) {
//         thisIsButton.style.backgroundColor = 'blue';
//     } else {
//         return 0;
//     }
// })

// function keydownFunction () {
//         thisIsButton.style.backgroundColor = '#0000ff';
// }

// if (inputId.length === 0 || inputPw.length === 0) {
//     thisIsButton.style.bacgroundColor = '#c4e1fb';
// }

// function keydown (a,b) {
//     if 
// }
// if (thisIsId.value === "ryeon18@gmail.com" && thisIsPw.value === "1234") {

// }

// function changeBackColor () {
//     if (inputId & inputPw) {
//         thisIsButton.style.backgroundColor = "blue";
//     }
// }

// const container = document.getElementsByClassName('container')[0];

// thisIsButton.addEventListener('click', function () {
    
//     if (inputId && inputPw) {
//         mainLink
//     } else {
//       0;
//     }
// })



// thisIsButton.addEventListener

// const setting = thisIsId && thisIsPw

// setting.addEventListener('keyup', function () {

// if (thisIsPw) {
//   thisIsButton.style.backgroundColor = "blue"; }
// // } else {
// //   return 0;
// // }
// })

// const inputId = thisId.value;
// const inputPw = thisPw.value;

// loginButton = inputId && inputPw ? (loginButton.style.backgroundColor = "#0000ff") : (loginButton.style.backgroundColor = "#c4e1fb");



// const loginButton = document.querySelector(".button");

// this.addEventListener("keyup", function () {
//   const loginId = document.querySelector("#id").value;
//   const loginPassword = document.querySelector("#pw").value;

//   if(true) {
//     document.querySelector(".button").style.backgroundColor = "blue" }
// });


// const activeBtn = () => {
//     const inputVal = id.value && pw.value;
//     btn.style.backgroundColor = inputVal ? "#0095f6" : "#c0dffd";
//   };
  
//   id.addEventListener("keyup", activeBtn);
//   pw.addEventListener("keyup", activeBtn);


// function changeBackColor () {
//     const input = thisId.value && thisPw.value;
//     loginButton.style.backgroundColor = input ? "#0000ff" : "#c4e1fb" ;
// }

// thisId.addEventListener('keyup',changeBackColor)

// const value = thisId.value && thisPw.value;


// function keydownFunction() {
//     document.getElementsByClassName('isDisabled')[0].style.background = "blue";
// }


// function keydownFunction () {
//     document.getElementsByClassName('button')[0].style.backgroundColor = "blue";
// }

//     if (inputId )
// })

// loginButton.addEventListener('keyup', function () {
//     let inputId = thisId.nodeValue;
//     let inputPw = thisPw.nodeValue;

//     if (inputId === 'ryeon18@gmail.com' && inputPw === '12345') {
//         reutrn 
//     }
// })