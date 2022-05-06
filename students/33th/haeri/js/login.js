// document.getElementById("Button").disabled = true;

// const thisIsButton = document.getElementsByClassName('login_btn')[0];

// thisIsButton.addEventListener('.active', function() {
//     const id = document.getElementsByClassName('id').value;
//     const pw = document.getElementsByClassName('pw').value;

//     if (id.length > 0 && pw.length > 0) {

//         return;
//     }
// })


// 왜(keep your head down)..... 
// pw를 먼저 입력하고 id를 입력해야 버튼이 활성화 되나요
// 하임천재천사님이 해결해주셨다 하임천재천사님 최고최고


const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const login_btn = document.querySelector(".login_btn");

function changeColor() {
  if(id.value && pw.value) { 
    login_btn.disabled = false; // 활성화
    login_btn.style.backgroundColor='#0095F6';
  } else { 
    login_btn.disabled = true; // 비활성화
  }
}

id.addEventListener('keyup',changeColor);
pw.addEventListener('keyup',changeColor);