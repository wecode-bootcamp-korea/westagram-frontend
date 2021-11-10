const commentInput = document.getElementById("commentInput");
const commentAddBtn = document.getElementById("commentAddBtn");
const commentHeartToggleBtn = document.getElementById("commentHeartToggleBtn");

// Active commentAddBtn
function activeToggleCommAddBtn() {
  let isInputValid = commentInput.value.length;

  isInputValid
    ? (commentAddBtn.style.color = "var(--color-blue)")
    : (commentAddBtn.style.color = "var(--color-opacity-blue)");

  commentAddBtn.disabled = !isInputValid;
}

// Make comment
function makeComment(userName = "weweco") {
  const inputText = commentInput.value;
  const userId = userName;
  const commentLi = document.createElement("li");
  commentLi.className = "info__comment";
  commentLi.innerHTML = `
      <div class="comment__left">
        <a class="comment__user-id" href="">
          ${userId}
        </a>
        <span class="comment__message">${inputText}</span>
      </div>
      <button id="commentHeartToggleBtn" class="comment__heart-btn">
        <img src="images/heart.png" alt="하트 버튼" />
      </button>
  `;
  return commentLi;
}

// Add comment
function addComment() {
  const feedComments = document.getElementById("feedComments");
  feedComments.appendChild(makeComment());
  resetCommentInput();
}

// Reset comment input
function resetCommentInput() {
  commentInput.value = "";
  activeToggleCommAddBtn();
}

// Trigger comment
function triggerAddComment(e) {
  const isInputValid = commentInput.value.length;
  if (isInputValid) activeToggleCommAddBtn();

  const isPressEnter = e.code === "Enter";
  const isClickAddBtn = e.target === commentAddBtn;

  if (isPressEnter && isInputValid) addComment();
  if (isClickAddBtn) addComment();
}

// Set addEventListener
commentInput.addEventListener("keypress", triggerAddComment);
commentAddBtn.addEventListener("click", triggerAddComment);
