
const replyInput = document.querySelector("#repl");
const replyBtn = document.querySelector("button");

function replyBtnAble () {
    let replyValue = replyInput.value
    
    if (replyValue.length > 0 ) {
        replyBtn.disabled = false;
    } else {
        replyBtn.disabled = true;
    }
}

replyInput.addEventListener('keyup', replyBtnAble)

function checkInput() {
    if (replyInput.value === '') {
        alert("댓글을 입력하세요!");
    } else {
        registerComment(replyInput.value);
    }
}

function registerComment(value) {
    const commentLists = document.getElementById("feed-reply-wrapper");
    const newCommentList = document.createElement("li");
    const newComment = `<span class="name">Top_dog </span><span>${value}</span>`;
    
    newCommentList.innerHTML = newComment;
    commentLists.appendChild(newCommentList);

    replyInput.innerHTML = "";
}

const init = () => {
    replyBtn.addEventListener("click", checkInput);
    // replyInput.addEventListener("input", checkInput);
}
init();