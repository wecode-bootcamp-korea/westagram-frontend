// 변수
const myNavImg = document.querySelector(`#myNavImg`); // 상단바
const navUserImg = document.querySelector(`#navUserImg`);
const navMyMenu = document.querySelector(`#navMyMenu`);

const replies = document.querySelector(`#replies`);
let replyBox = document.querySelectorAll(`.replyBox`);
let delReply = document.querySelectorAll(`.delReply`);
const inputReply = document.querySelector(`#inputReply`);
const inputReplyBtn = document.querySelector(`#inputReplyBtn`);

// 함수
const addReply = () => {
  const div = document.createElement(`div`);
  const divClass = document.createAttribute(`class`);
  divClass.value = `replyBox`;
  div.innerHTML += `<p>1</p>`;
  div.setAttributeNode(divClass);
  console.log(div);
  if (inputReply.value.length) {
    replies.innerHTML += `
    <div class="replyBox">
      <div class="userName">나다</div>
      <div class="userTalk">${inputReply.value}</div>
      <div class="delReply">x</div>
    </div>
  `;
    inputReply.value = ``;
  }
};

// const addReply = () => {
//   if (inputReply.value.length) {
//     replies.innerHTML += `
//     <div class="replyBox">
//       <div class="userName">나다</div>
//       <div class="userTalk">${inputReply.value}</div>
//       <div class="delReply">x</div>
//     </div>
//   `;
//     inputReply.value = ``;
//   }
// };

// for (let i = 0; i < delReply.length; i++) {
//   delReply[i].addEventListener(`click`, function () {
//     console.log(`hi`, i);
//   });
// }

// 실행
navUserImg.addEventListener(`click`, () => {  // 개인 메뉴 표시
  navMyMenu.style.display = `flex`;
});


document.addEventListener('mouseup', e => { // 개인 메뉴 닫기
  !navMyMenu.contains(e.target) ? navMyMenu.style.display = 'none' : null;
});



inputReply.addEventListener(`keydown`, e => e.keyCode === 13 ? addReply() : null);  // 댓글 입력
inputReplyBtn.addEventListener(`click`, addReply);



// test
const check = document.querySelector(`#check`);
check.addEventListener(`click`, () => console.log(delReply));