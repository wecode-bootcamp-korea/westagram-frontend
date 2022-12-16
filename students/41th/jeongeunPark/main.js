const comment = document.querySelector(".comment");
const btn = document.querySelector(".btn");
const commentBox = document.querySelector(".allcomment");

function addComment() {
  const add = document.createElement("li");

  if (comment.value) {
    const userAndComment = `<div>
                  <strong><span> username </span>
                  <span></span>
                  <span></span>
                  <span> ${comment.value} </span>
                  </div>`;

    commentBox.appendChild(add);
    add.insertAdjacentHTML("afterend", userAndComment);
  }
}

btn.addEventListener("click", addComment);

function enterKey(e) {
  const add = document.createElement("li");

  if (e.key === "Enter" && comment.value) {
    const userAndComment = `<div>
                    <strong><span> username </span>
                    <span></span>
                    <span></span>
                    <span> ${comment.value} </span>
                    </div>`;

    commentBox.appendChild(add);
    add.insertAdjacentHTML("afterend", userAndComment);
  }
}

comment.addEventListener("keydown", enterKey);
