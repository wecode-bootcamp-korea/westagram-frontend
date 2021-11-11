const commentInput = document.querySelector(".feed-comment-add-input");
const commentBtn = document.querySelector(".feed-comment-add-btn");
const comment = document.querySelector(".newcomment");

commentBtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.innerHTML = "wecode_bootcamp";
  comment.appendChild(div);

  let span = document.createElement("span");
  span.innerHTML = commentInput.value;
  comment.appendChild(span);

  div.style.fontWeight = 650;
  div.style.marginBottom = "5px";

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
  if (!e.target.value) {
    commentBtn.style.color = "#b9dcfa";
  } else {
    commentBtn.style.color = "#0095f6";
  }
});
