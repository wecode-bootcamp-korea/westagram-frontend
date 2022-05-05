let inputComment = document.getElementsByClassName("inputComment")[0];
let submitCommentBtn = document.getElementsByClassName("submitCommentBtn")[0];

function submitComment() {
    const newUserComment = document.getElementsByClassName("commentBox")[0];

    const commentDiv = document.createElement("div");
    const userName = document.createElement("p");
    const comment = document.createElement("div");
    const heart = document.createElement("p");
    const deleteComment = document.createElement("p");

    commentDiv.classList.add("userCommentBox");
    userName.classList.add("userName");
    comment.classList.add("userComment");
    heart.classList.add("userHeart");
    deleteComment.classList.add("delete");

    userName.innerHTML = "happyhappy"; // *** 임시 닉네임 ***
    comment.innerText = inputComment.value;
    heart.innerHTML = '<i class="fa-solid fa-heart commentIcon"></i>';
    deleteComment.innerHTML = '<i class="fa-solid fa-trash commentIcon"></i>';

    commentDiv.appendChild(userName);
    commentDiv.appendChild(comment);
    commentDiv.appendChild(heart);
    commentDiv.appendChild(deleteComment);

    newUserComment.appendChild(commentDiv);
}

submitCommentBtn.addEventListener("click", (e) => {
    submitComment();
    inputComment.value = "";
});