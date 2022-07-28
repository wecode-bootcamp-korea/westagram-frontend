const commentInput = document.querySelector("comment-box");
const commentBtn = document.querySelector("comment-btn");
const commentPost = document.querySelector("comment-post");

function postComment() {

    const comments = document.createElement("div");
    const mainText = document.createElement("p");
    const username = document.createElement("span");

    username.innerHTML = "c_wonho"
    mainText.innerHTML = commentInput.value;

    comments.appendChild(username);
    comments.appendChild(mainText);

    commentPost.appendChild(comments);
    commentInput.value="";
}

commentBtn.addEventListener("click", postComment);


commentInput.addEventListener("keydown", enterComment);

function enterComment(event) {
    if(event.code === "Enter") {
        postComment();
        commentInput.value="";
    }
}
