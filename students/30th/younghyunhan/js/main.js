const thisIsComment = document.getElementsByClassName("comment")[0];
const feedFive = document.getElementsByClassName("feedFive")[0];
// const postButton = document.getElementsByClassName("postButton")[0];

thisIsComment.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    const post = document.createElement("p");
    post.innerHTML = `<b style="color: red;">text01</b> ${thisIsComment.value}`;
    feedFive.appendChild(post);
  }
});

/* postButton.addEventListener("click", function () {
  const post = document.createElement("p");
  post.innerHTML = `<b style="color: red;">text01</b> ${thisIsComment.value}`;
  feedFive.appendChild(post);
});*/
