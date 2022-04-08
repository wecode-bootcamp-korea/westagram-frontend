const replyEnter = document.querySelector(".name");
const reply = document.querySelector(".main-reply");

replyEnter.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let divTag = document.createElement("div");
    let divTag2 = document.createElement("div");
    let divTag3 = document.createElement("div");
    divTag.classList.add("reply");
    divTag2.classList.add("reply-id");
    divTag3.classList.add("reply-info");
    divTag2.textContent = "_lhj";
    divTag3.textContent = replyEnter.value;
    divTag.append(divTag2);
    divTag.append(divTag3);
    reply.append(divTag);
    replyEnter.value = "";
    console.log("d");
  }
});
