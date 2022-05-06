let inputComment = document.getElementsByClassName("inputComment")[0];
let submitCommentBtn = document.getElementsByClassName("submitCommentBtn")[0];
let heart = document.querySelector('.commentHeart');

// comment 게시 작동 조건
const checkInput = () => {
    if(!inputComment.value.length) {
        return;
    }
    submitComment();
}

//comment 구현
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
    heart.innerHTML = '<i class="fa-solid fa-heart commentIcon commentHeart"></i>';
    heart.addEventListener('click', (e) => {
        e.target.classList.toggle('fa-heart-circle-check');
    })

    deleteComment.innerHTML = '<i class="fa-solid fa-trash commentIcon"></i>';
    deleteComment.addEventListener('click', () => {
        newUserComment.removeChild(commentDiv);
    })

    console.log(commentDiv);

    commentDiv.appendChild(userName);
    commentDiv.appendChild(comment);
    commentDiv.appendChild(heart);
    commentDiv.appendChild(deleteComment);

    newUserComment.appendChild(commentDiv);
}

submitCommentBtn.addEventListener("click", (e) => {
    checkInput();
    inputComment.value = "";
});

heart.addEventListener("click", (e) => {
    e.target.classList.toggle('fa-heart-circle-check');
});
