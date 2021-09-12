// DOM 객체에 접근 > 특정 요소를 불러와서 > 조작
// 변수, const, 고정값
// DOM method >>> getElementsByClassName, getElementById 

const thisIsButton = document.getElementsByClassName('button')[0];
const thisIsId = document.getElementById('id');
const thisIsPw = document.getElementById('pw');

function activeButton() {
  const inputId = thisIsId.value;
  const inputPw = thisIsPw.value;

  return inputId.length > 0 && inputPw.length > 0 ? (
    thisIsButton.disabled = true,
    thisIsButton.style.backgroundColor = "#0000ff") : (
    thisIsButton.disabled = false,
    thisIsButton.style.backgroundColor = "#c4e1fb"
    )
}

thisIsId.addEventListener('keyup', activeButton)

thisIsPw.addEventListener('keyup', activeButton)


// function keyupFuction () {
//     const inputId = thisIsId.value;
//     const inputPw = thisIsPw.value;

//     if (inputId.length > 0 && inputPw.length > 0) {
//       thisIsButton.disabled = true;
//       thisIsButton.style.backgroundColor = "#0000ff";
//     }
//     else {
//       thisIsButton.disabled = false;
//       thisIsButton.style.backgroundColor = "#c4e1fb";
//     }
//   }

// thisIsId.addEventListener('keyup',keyupFuction)
// thisIsPw.addEventListener('keyup',keyupFuction)
