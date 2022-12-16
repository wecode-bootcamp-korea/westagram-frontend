const newCommentContent = document.querySelector('#commentInput');
const submit = document.querySelector('.submitBtn');
const commentBox = document.querySelector('.commentBox');


function activateBtn() {
    const inputValue = newCommentContent.value;
    
    if (inputValue.length > 0) {
        submit.style.color = "#0095F6";
    } else {
        submit.style.color = "#b4dcff";
    }
}

 newCommentContent.addEventListener('keyup', activateBtn);


 function addNewComment() { 
    const newCommentBox = document.createElement("div");
    const newCommentLineLeft = document.createElement("div");
    const newCommentLineRight = document.createElement("div");
    const newCommentId = document.createElement("span");
    const newCommentText = document.createElement("span");
    const likeComment = document.createElement("i");
    const deleteComment = document.createElement("i");

    newCommentBox.setAttribute('class','comment');
    newCommentLineLeft.setAttribute('class','commentLineLeft');
    newCommentLineRight.setAttribute('class','commentLineRight');
    newCommentId.setAttribute('class','commentId');
    newCommentText.setAttribute('class','commentContent');
    likeComment.setAttribute('class', 'fa-regular fa-heart');
    deleteComment.setAttribute('class', 'fa-solid fa-xmark');

    newCommentLineLeft.appendChild(newCommentId);
    newCommentLineLeft.appendChild(newCommentText);

    newCommentLineRight.appendChild(likeComment);
    newCommentLineRight.appendChild(deleteComment);

    newCommentBox.appendChild(newCommentLineLeft);
    newCommentBox.appendChild(newCommentLineRight);

    newCommentId.innerHTML = "phdjay";
    newCommentText.innerText = newCommentContent.value;

    commentBox.appendChild(newCommentBox);
    newCommentContent.value = "";

 }

 submit.addEventListener('click', addNewComment)