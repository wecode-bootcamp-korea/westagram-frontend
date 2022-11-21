function createComment() {
  const commentInput = document.getElementsByClassName("comment-text")[0].value;
  const createLi = document.createElement("li");
  const comment = document.getElementsByClassName("comment-area")[0];

  const userComment = `
  <span class = "user-name">abcde</span>
  <span class = "user-comment">${commentInput}</span>
  <button class = "delete">x</button>
  `;
  createLi.classList.add("user");
  createLi.innerHTML = userComment;
  comment.appendChild(createLi);

  const delClick = document.querySelector(".delete");

  delClick.addEventListener("click", (event) => {
    const btn = event.target;
    console.log(btn);

    const deleteComment = btn.parentNode;
    comment.removeChild(deleteComment);
  });
}
const btn = document.getElementsByClassName("registration")[0];

btn.addEventListener("click", createComment);

// function commentDelete() {
//   const commentDel = document.querySelector(".user");
//   const commentArea = document.querySelector(".comment-area");
//   commentArea.removeChild(commentDel);
// }
// const delClick = document.querySelector(".delete");

// delClick.addEventListener("click", (event) => {
//   const btn = event.target;
//   console.log(btn);
// });
