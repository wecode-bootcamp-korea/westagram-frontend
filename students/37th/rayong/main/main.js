const commentsForm = document.querySelector("#feedsForm");
const commentsInput = document.querySelector("#feedsInput");
const commentsListBox = document.querySelector("#feedsList");

// 댓글 추가

function paintComments (comments) {

    const commentsList = document.createElement("li");
    const commentsText = document.createElement("span");
    const commentsLikeBtn = document.createElement("i");
    const commentsDelBtn = document.createElement("i");
    const btnBox = document.createElement("div");

    commentsText.innerText = comments;
    commentsLikeBtn.className = "fa-solid fa-heart"
    commentsDelBtn.className = "fa-regular fa-circle-xmark";
    
    commentsDelBtn.addEventListener('click', delComments);
    commentsLikeBtn.addEventListener('click', activateLikeBtn);

    btnBox.appendChild(commentsLikeBtn);
    btnBox.appendChild(commentsDelBtn);
    commentsList.appendChild(commentsText);
    commentsList.appendChild(btnBox);
    commentsListBox.appendChild(commentsList);
}

function activateLikeBtn (e) {
    e.target.classList.toggle("icon-red");
}

function delComments (e) {
    e.target.parentElement.parentElement.remove();
}

function handleSubmit (e) {
    e.preventDefault();
    const comments = commentsInput.value;
    paintComments(comments)
    commentsInput.value = "";
}



commentsForm.addEventListener('submit', handleSubmit);
