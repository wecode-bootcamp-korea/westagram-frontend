// const instaForm = document.getElementsByClassName("comment")[0];
// const commentsContainer = document.querySelector("#comments");

// comment.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const commentInput = instaForm.elements.comment; 
//   addComment(commentInput.value); 
//   commentInput.value = "";
// });


//   const addComment = (comment) => {
//   const newComment = document.createElement("li");
//   const bTag = document.createElement("b");
//   newComment.append(bTag);
//   newComment.append(`${comment}`);
//   commentsContainer.append(newComment);
// };

const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");

instaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const commentInput = instaForm.elements.comment; 
  addComment(commentInput.value); 
  commentInput.value = "";
});


  const addComment = (comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("b");
  newComment.append(bTag);
  newComment.append(`-${comment}`);
  commentsContainer.append(newComment);
}