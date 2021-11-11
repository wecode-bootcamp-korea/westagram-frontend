const replyInput = document.querySelector(".replyAndBtn .reply");
const replyBtn = document.querySelector(".replyAndBtn .replyBtn");
let reply;

function handleReply(){
  const newDivReplyChunk = document.createElement("div");
  newDivReplyChunk.className = "replyChunk";
  const newDivReplyItSelf = document.createElement("div");
  newDivReplyItSelf.className = "replyItSelf";
  const newSpanShownReplyId = document.createElement("span");
  newSpanShownReplyId.className = "shownReplyId";
  const newSpanReplyText = document.createElement("span");
  newSpanReplyText.className = "shownReplyText";
  const newImgHeartIcon = document.createElement("img");
  newImgHeartIcon.setAttribute("src", "src/heart.png")

  newSpanShownReplyId.innerText  = "canon_mj";
  newSpanReplyText.innerHTML = reply;

  const divShownReply = document.querySelector(".shownReply");
  divShownReply.appendChild(newDivReplyChunk);
  newDivReplyChunk.appendChild(newDivReplyItSelf);
  newDivReplyItSelf.appendChild(newSpanShownReplyId);
  newDivReplyItSelf.appendChild(newSpanReplyText);
  newDivReplyChunk.appendChild(newImgHeartIcon);

  replyInput.value = "";
}

replyInput.addEventListener("input", () => {
  reply = replyInput.value;
})

replyBtn.addEventListener("click", handleReply)

function enterkey() {
  if (window.event.keyCode == 13) {
    handleReply()
  }
}