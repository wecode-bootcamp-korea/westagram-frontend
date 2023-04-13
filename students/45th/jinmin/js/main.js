// 변수
const replies = document.querySelector(`#replies`);
let replyBox = document.querySelectorAll(`.replyBox`);
// let delReply = document.querySelectorAll(`.delReply`);
const inputReply = document.querySelector(`#inputReply`);
const inputReplyBtn = document.querySelector(`#inputReplyBtn`);

// 함수
const addReply = () => {
  replies.innerHTML += `
    <div class="replyBox">
      <div class="userName">나당</div>
      <div class="userTalk">${inputReply.value}</div>
      <div class="delReply">x</div>
    </div>
  `;
  inputReply.value = ``;
};

// 실행
inputReply.addEventListener(`keydown`, e => e.keyCode === 13 ? addReply() : null);
inputReplyBtn.addEventListener(`click`, addReply);