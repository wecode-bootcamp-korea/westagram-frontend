let commentInput = document.getElementById("commentInput");
let saveValue = document.getElementById("saveValue");
let feedCommentBox = document.getElementById("feedCommentBox");

const setCommentsLocal = () => {
  let comments =
    localStorage.getItem("comments") == null
      ? []
      : JSON.parse(localStorage.getItem("comments"));

  let randomId = Math.random();

  let commentsValue = {
    id: randomId,
    comment: commentInput.value,
  };

  if (commentsValue.comment !== "") {
    comments.push(commentsValue);
  }

  localStorage.setItem("comments", JSON.stringify(comments));
  commentInput.value = null;
  parsingData();
};

function parsingData() {
  let value = JSON.parse(localStorage.getItem("comments"));

  const newComment = document.createElement("div");

  newComment.className = "feedComment";

  for (let i = 0; i < value.length; i++) {
    newComment.innerHTML = `
                            <p>zi_nukk <span>${value[i].comment}</span></p> 
                        `;
    feedCommentBox.appendChild(newComment);
  }
}

const onKeyDownHandler = () => {
  if (window.event.code == "Enter") {
    setCommentsLocal();
  }
};

saveValue.addEventListener("click", setCommentsLocal);
