let inputComment = document.getElementsByClassName("inputComment")[0];
let submitCommentBtn = document.getElementsByClassName("submitCommentBtn")[0];

function submitComment() {
    const newUserComment = document.getElementsByClassName("commentBox")[0];

    const commentDiv = document.createElement("div");
    const userName = document.createElement("p");
    const comment = document.createElement("div");

    commentDiv.classList.add("userCommentBox");
    userName.classList.add("userName");
    comment.classList.add("userComment");

    userName.innerHTML = "hacker";
    comment.innerText = inputComment.value;

    commentDiv.appendChild(userName);
    commentDiv.appendChild(comment);

    newUserComment.appendChild(commentDiv);
}

submitCommentBtn.addEventListener("click", (e) => {
    submitComment();
    inputComment.value = "";
});