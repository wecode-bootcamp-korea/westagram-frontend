// DOM 객체에 접근 > 특정 요소를 불러와서 > 조작
// 변수, const, 고정값
// DOM method >>> getElementsByClassName, getElementById 

const thisIsButton = document.querySelector('.button');
const thisIsId = document.querySelector('#id');
const thisIsPw = document.querySelector('#pw');

function activeButton() {
  // const inputNeed = thisIsId.value.includes('@');
  const inputId = thisIsId.value.includes('@') && thisIsId.value.length > 0;
  const inputPw = thisIsPw.value.length >= 5;
  const conditions = inputId && inputPw;

  const activeBtn = () => {
    thisIsButton.disabled = false;
    thisIsButton.style.backgroundColor = "#0000ff";
  }
  const inActiveBtn = () => {
    thisIsButton.disabled = true;
    thisIsButton.style.backgroundColor = "#c4e1fb";
  }
  
  return conditions ? (
    activeBtn() ) : (
      inActiveBtn()
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
