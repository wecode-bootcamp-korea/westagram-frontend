/*
const replySpace = document.getElementsByClassName("input-reply")[0];
const uploadButton = document.getElementsByClassName("upload-a")[0];
const appendParents = document.getElementById("reply");

function newComments (value) {
  const newContainer = document.createElement("div");
  const newID = document.createElement("p");
  const newReply = document.createElement("p");

  newContainer.classList.add("reply-left");
  newID.ClassList.add("owner-name");
  newReply.classList.add("contents-reply");

  newID.innerText = "before_wecode";
  newReply.innerText = replySpace.value;

  newContainer.appendchild("newID");
  newContainer.appendchild("newReply");
}

uploadButton.addEventListener("click", newComments);
*/




const replySpace = document.getElementsByClassName("input-reply")[0];
const uploadButton = document.getElementsByClassName("upload-a")[0];
const appendParents = document.getElementById("reply");

function oning() {
  if (replySpace.value !== "") {
    const wantedNode = document.getElementsByClassName("reply-left")[0].cloneNode(true);
    const wantedNodeVal =wantedNode.getElementsByClassName("contents-reply")[0];

    appendParents.appendChild(wantedNode);
    wantedNodeVal.innerHTML = replySpace.value;
    replySpace.value = "";

    wantedNode.style.marginTop = "1px";
    wantedNode.style.position = "relative";
    wantedNode.style.bottom = "3px";
    wantedNodeVal.style.wordBreak = "break-all";
  }
}

uploadButton.addEventListener("click", oning);
replySpace.addEventListener("keypress", function (e) {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    oning();
  }
});
