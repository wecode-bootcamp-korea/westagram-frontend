// comments
const commentTextID = document.getElementById("write-comment-text");
const commentSubmit = document.getElementById("write-comment-submit");
const commentBox = document.getElementById("post-comments-box#1");

let inputComment;

const commentAddHTML = () => {
    const newDiv = document.createElement("div");
    const newUsernameSpan = document.createElement("span");
    const newCommentSpan = document.createElement("span");
    const newHeartIcon = document.createElement("i");
    
    newDiv.className="post-comments";
    newUsernameSpan.className="username";
    newUsernameSpan.innerHTML="mincraft_bangbang&nbsp;";
    newDiv.appendChild(newUsernameSpan);

    newCommentSpan.className="comment-text";
    newCommentSpan.innerHTML = inputComment;

    newDiv.appendChild(newCommentSpan);

    newHeartIcon.className="far";
    newHeartIcon.classList.add("fa-heart");
    newDiv.appendChild(newHeartIcon);
    commentBox.appendChild(newDiv);
}

const commentAddTheWritesAndReset = e => {
    commentAddHTML();
    //!!
    commentResetInputVl()
}

const commentResetInputVl = e => {
    commentTextID.value = "";
    inputComment = commentTextID.value;
}

const commentPressEnter = e => {
    if (e.key === 13 || e.which === 13){
        e.preventDefault();
        commentAddTheWritesAndReset();
        commentSubmit.classList.remove("activate-comment-submit")
        return false;
    }
}

const commentChecker = e => {
    inputComment = e.target.value;
    // console.log(inputComment);
    inputComment ? commentSubmit.classList.add("activate-comment-submit") : commentSubmit.classList.remove("activate-comment-submit");
}

commentTextID.oninput = commentChecker;
commentSubmit.onmouseup = commentAddTheWritesAndReset;
commentTextID.addEventListener("keypress", commentPressEnter);
