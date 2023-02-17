let commentInput = document.getElementsByClassName("comment_text")[0];
let submitBtn = document.getElementsByClassName("comment_submit")[0];

function submit() {
    const box = document.getElementsByClassName("add_user_comment")[0];

    const comments = document.createElement("div");
    const userName = document.createElement("span");
    const userComment = document.createElement("span");

    comments.classList.add("add_user_comment");
    userName.classList.add("user_name");
    userComment.classList.add("user_comment");

    userName.innerHTML= "Youcode";
    userComment.innerText = commentInput.value;

    comments.appendChild(userName);
    comments.appendChild(userComment);

    box.appendChild(comments);
}

submitBtn.addEventListener("click", () => {

    submit()
    commentInput.value = "";

});

commentInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        submit()
        commentInput.value = "";
    }
});