const feedsComment = document.querySelector("feeds__comment");
const feedsCommentInput = document.querySelector("feeds__comment__input");

function enterFn() {
  if (window.event.keyCode == 13) {
    feedsComment.innerHTML(`${feedsCommentInput}.value`);
  }
}
