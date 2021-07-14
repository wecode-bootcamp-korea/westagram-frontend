function createComments(idString, textString) {
  const commentsDiv = document.createElement(
    `<div class="comments__desc">
        <div><a href="">${idString}</a></div>
        <div><a href="">${textString}</a></div>
    </div>`
  );

  return commentsDiv;
}

function addComments() {
  const commentsInput = document.querySelector(`#commentsInput`),
    commentsBtn = document.querySelector(`#addCommentsBtn`);
  let comments = ``;
  commentsInput.addEventListener(`keyup`, () => {
    comments = commentsInput.value;
  });

  commentsBtn.addEventListener(`click`, () => {
    const commentsArea = document.getElementsByClassName(`comments__desc`);
    console.log(commentsArea);
    const newCommentsId = localStorage.getItem(`id`),
      newCommentsText = comments;

    const a = createComments(newCommentsId, newCommentsText);
    console.log(a);
  });
}
(() => {
  addComments();
})();
