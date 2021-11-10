//input에 적고 , 게시글 클릭 이벤트 하면
//새로운 댓글 추가

const commentInput = document.querySelector(".feed-article-add-comment");
const commentBtn = document.querySelector(".feed-article-add-comment-btn");
const comment = document.querySelector(".comment-article");

/*
commentInput.addEventListener("keyup", (e) => {
  //e.target.value = newComment.innerText;
  commentBtn.addEventListener("click", () => {
    newComment.innerHTML = e.target.value;
    newCommentUser.classList.remove("hidden");
  });
});
*/

// 위에는 class로 display속성 none으로 줬다가 이벤트받으면 보이게 하는거

commentBtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.innerHTML = "wecode_bootcamp";
  comment.appendChild(div);

  let span = document.createElement("span");
  span.innerHTML = commentInput.value;
  div.appendChild(span);

  div.style.fontWeight = 650;
  div.style.marginBottom = "5px";
  span.style.fontWeight = 400;
  span.style.marginLeft = "5px";

  commentInput.value = "";
});

//위에는 클릭이벤트 아래는 엔터이벤트
commentInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    let div = document.createElement("div");
    div.innerHTML = "wecode_bootcamp";
    comment.appendChild(div);

    let span = document.createElement("span");
    span.innerHTML = commentInput.value;
    div.appendChild(span);

    div.style.fontWeight = 650;
    div.style.marginBottom = "5px";
    span.style.fontWeight = 400;
    span.style.marginLeft = "5px";

    commentInput.value = "";
  }
});

commentInput.addEventListener("keyup", (e) => {
  if (e.value !== false) {
    commentBtn.style.color = "#0095f6";
  } else {
    commentBtn.style.color = "red";
  }
});
