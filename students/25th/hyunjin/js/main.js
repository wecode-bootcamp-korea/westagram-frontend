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
  const userId = document.querySelector(".owner-id").innerText;
  //2. 새로운 아이템 만듬(+삭제)
  //3. comment안에 새로만든 아이템을 추가한다.

  const commentRow = createComment(userId, text);
  commentRow.scrollIntoView({ block: "center" });
  comments.appendChild(commentRow);

  //4. 인풋을 초기화한다.
  commentInput.value = " ";
  commentInput.focus();
}

commentBtn.addEventListener("click", onAdd);
let id = 0;
function createComment(userId, text) {
  const commentWrapper = document.createElement("div");
  commentWrapper.setAttribute("class", "contents");
  commentWrapper.setAttribute("data-id", id);
  commentWrapper.innerHTML = `
        <div class="commentLeft">
             <span class="owner-id"><b>${userId}</b></span>
             <span class="owner-content">${text}</span>
        </div>

        <div class="commnetRight" >
             <button class="delete-btn">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        `;
  id++;
  return commentWrapper;
}

commentInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

comments.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.contents[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
