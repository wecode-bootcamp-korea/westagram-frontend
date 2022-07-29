const commentInput = document.getElementsByClassName("comment-box")[0];
const commentBtn = document.getElementsByClassName("comment-btn")[0];
const commentPost = document.getElementsByClassName("comment-post")[0];

function postComment() {

    const comments = document.createElement("div");
    const mainText = document.createElement("p");
    const username = document.createElement("span");

    comments.classList.add("comments-div")
    username.classList.add("bold")

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