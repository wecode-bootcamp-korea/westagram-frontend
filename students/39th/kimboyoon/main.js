const input = document.querySelector(".article_typingReply");
const replyBtn = document.querySelector(".article_replyPush");

function checkReply () {
    const inputValue = input.value; 

    if (inputValue.length > 0) {
        replyBtn.disabled = false;
        replyBtn.style.cursor = "pointer";
        replyBtn.style.opacity = 1;
    } else {
        replyBtn.disabled = true;
        replyBtn.style.cursor = "default";
        replyBtn.style.opacity = 0.3;
    }
}

function addReply (value) {
    const comment = document.querySelector(".article_reply");
    const newComment = document.createElement('li');

    const newId = document.createElement('span');
    newId.innerText = "boooni.k";
    newId.classList.add("replyId");
    newComment.appendChild(newId);
    comment.appendChild(newComment);

    value = input.value;
    const newReply = document.createElement('span');
    newReply.innerText = value;
    newComment.appendChild(newReply);
    comment.appendChild(newComment);

    const newDelete = document.createElement('span');
    newDelete.innerText = "X";
    newDelete.classList.add("replyDelete");
    newComment.appendChild(newDelete);
    comment.appendChild(newComment);

    const deleteBtn = () => {
        newComment.remove();
    }

    newDelete.addEventListener('click', deleteBtn);
}

function replyClick () {
    addReply();
    input.value = "";
}

function enterKey (e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        addReply();
        input.value = "";
    }
}

replyBtn.addEventListener('click', replyClick);
input.addEventListener('keyup', checkReply);
input.addEventListener('keydown', enterKey);

