const newCommentLocation = document.querySelector("#new_comment_location");
const userWecode = document.querySelector("#user_wecode");
const comment_write = document.getElementById("comment_write");

function commentHandler(event) {
  event.preventDefault();
  const comment = event.target[0].value;

  if (comment) {
    const userId = userWecode.textContent;
    const commentContainer = document.createElement("ul");

    commentContainer.classList.add("flex");
    commentContainer.innerHTML = `<li><span class="user_name">${userId}</span>
    <span class="comment_style">${comment}</span></li>`;

    const buttons = document.createElement("li");
    const heartBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    heartBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    heartBtn.style.color = "#909090";
    deleteBtn.style.color = "#909090";
    buttons.appendChild(heartBtn);
    buttons.appendChild(deleteBtn);
    commentContainer.appendChild(buttons);
    newCommentLocation.appendChild(commentContainer);

    event.target[0].value = "";

    //댓글 지우기
    function deleteHandler() {
      newCommentLocation.removeChild(commentContainer);
    }
    deleteBtn.addEventListener("click", deleteHandler);

    //하트 채우기
    function heartHandler() {
      if (heartBtn.innerHTML === '<i class="fa-regular fa-heart"></i>') {
        heartBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        heartBtn.style.color = "#EE4955";
      } else {
        heartBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        heartBtn.style.color = "#909090";
      }
    }
    heartBtn.addEventListener("click", heartHandler);
  }
}

comment_write.addEventListener("submit", commentHandler);

// 게시 버튼 활성화
function commentBtnHandler(e) {
  const commentBtn = document.querySelector("#comment_btn");

  if (e.target.value) {
    commentBtn.style.opacity = 1;
  } else {
    commentBtn.style.opacity = 0.5;
  }
}

comment_write.addEventListener("keyup", commentBtnHandler);
