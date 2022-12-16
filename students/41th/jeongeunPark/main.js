const comment = document.querySelector(".comment");
const btn = document.querySelector(".btn");

function addcomment() {
  const add = document.createElement("li");
  const commentBox = document.querySelector(".allcomment");

  if (comment.value) {
    const html = `<strong><span> username </span></ strong><span> ${comment.value} </span>;`;

    add.insertAdjacentHTML("afterend", html);

    commentBox.appendChild(add);
  }
}

btn.addEventListener("click", addcomment);
