const comments = document.querySelector(".comments");
const commentInput = document.querySelector(".comment-input");
const commentBtn = document.querySelector(".comment-btn");

function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아온다.
  const text = commentInput.value;
  if (text === "") {
    commentInput.focus();
    return;
  }
  const id = document.querySelector(".owner-id").innerText;
  //2. 새로운 아이템 만듬(+삭제)
  const commentRow = createComment(id, text);
  commentRow.scrollIntoView({ block: "center" });
  //3. comment안에 새로만든 아이템을 추가한다.
  comments.appendChild(commentRow);
  //4. 인풋을 초기화한다.
  commentInput.value = "";
  commentInput.focus();
}

commentBtn.addEventListener("click", onAdd);

function createComment(id, text) {
  const commentWrapper = document.createElement("div");
  commentWrapper.setAttribute("class", "contents");

  const commentLeft = document.createElement("div");
  commentLeft.setAttribute("class", "commentLeft");

  const ownerId = document.createElement("span");
  ownerId.setAttribute("class", "owner-id");
  ownerId.innerHTML = `<b>${id}</b>`;

  const commentContent = document.createElement("span");
  commentContent.setAttribute("class", "owner-content");
  commentContent.innerText = text;

  commentLeft.appendChild(ownerId);
  commentLeft.appendChild(commentContent);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete-btn");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.style.justifyContent = "right";

  const commentRight = document.createElement("div");
  commentRight.setAttribute("class", "commentRight");
  commentRight.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    comments.removeChild(commentWrapper);
  });

  commentWrapper.appendChild(commentLeft);
  commentWrapper.appendChild(commentRight);
  commentWrapper.appendChild(deleteBtn);

  return commentWrapper;
}

commentInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
