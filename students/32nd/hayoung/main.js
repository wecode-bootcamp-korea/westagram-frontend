const commentForm = document.querySelector(".comment_form")
const commentInput = commentForm.querySelector(".comment_write");
const commentButton = document.querySelector(".comment_btn");
const newComment = document.querySelector(".comments");

function reply (){
    newComment.appendChild(commentInput);
    commentInput.innerText = newComment;
    commentInput.appendChild(text)

}

function submitOnclickBtn(){
    // const id = document.querySelector(".comment_id");
    // const text = document.querySelector(".comment_text");
    const replycomment = commentInput.value;
    commentInput.value = "";
    reply(replycomment);
}


commentButton.addEventListener("click",submitOnclickBtn)


