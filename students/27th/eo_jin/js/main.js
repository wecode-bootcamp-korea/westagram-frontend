const replyInput = document.querySelector(".replyAndBtn .reply");
const replyBtn = document.querySelector(".replyAndBtn .replyBtn");
let reply;

function handleReply(){
  if(reply){
    // div, span, img 태그 생성하고 class 부여
    const DivReplyChunk = document.createElement("div");
    DivReplyChunk.className = "replyChunk";
    const DivReplyItSelf = document.createElement("div");
    DivReplyItSelf.className = "replyItSelf";
    const SpanShownReplyId = document.createElement("span");
    SpanShownReplyId.className = "shownReplyId";
    const SpanReplyText = document.createElement("span");
    SpanReplyText.className = "shownReplyText";
    const ImgHeartIcon = document.createElement("img");
    ImgHeartIcon.setAttribute("src", "src/heart.png")

    // 생성된 2개의 span 태그에 각각 아이디와 reply를 content로 부여
    SpanShownReplyId.innerText  = "canon_mj";
    SpanReplyText.innerHTML = reply;

    // 이제 레이아웃대로 만들어진 태그들 차곡차곡 쌓기
    const divReply = document.querySelector(".reply");
    divReply.appendChild(DivReplyChunk);
    DivReplyChunk.appendChild(DivReplyItSelf);
    DivReplyItSelf.appendChild(SpanShownReplyId);
    DivReplyItSelf.appendChild(SpanReplyText);
    DivReplyChunk.appendChild(ImgHeartIcon);
    
    // 댓글 입력창 비우고 reply에 빈 문자열 할당
    replyInput.value = "";
    reply = "";
  }
  
}

// reply input event function
replyInput.addEventListener("input", () => {
  reply = replyInput.value;
})


// event handler
// click event handler
replyBtn.addEventListener("click", handleReply);

// enter keydown event handler
function enterkey() {
  if (window.event.keyCode == 13) {
    handleReply();
  }
}