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
    newComment.append(`abc-123 ${comment}`);
    commentsContainer.append(newComment);
}
