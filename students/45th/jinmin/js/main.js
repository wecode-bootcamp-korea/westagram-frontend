// 변수
const replies = document.querySelector(`#replies`);
const myNewReply = document.querySelector(`#myNewReply`);
const myReplyGo = document.querySelector(`#myReplyGo`);

// 실행
myReplyGo.addEventListener(`click`, () => {
  replies.innerHTML += `
    <div class="replyBox">
    <div class="userName">나당</div>
    <div class="userTalk">${myNewReply.value}</div>
  </div>
  `;
});