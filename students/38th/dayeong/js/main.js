let commentInput = document.querySelector(".reply input");
let commentContainer = document.querySelector(".comment-container");
let commentBtn = document.querySelector(".reply button");

// console.log(commentInput.value);

commentBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let commentList = document.createElement("div");
  commentList.innerHTML = `<span classname="comment-username" style="font-weight: bold">wecode_bootcamp</span> ${commentInput.value}`;
  commentList.className = "comment-list";
  commentContainer.appendChild(commentList);

  commentInput.value = "";
});
