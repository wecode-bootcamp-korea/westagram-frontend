const commentInput = document.querySelector(".comment-input");
const commentBtn = document.querySelector(".comment-btn");
const commentBox = document.querySelector("#comment-box");
const blankHeart = document.querySelector(".blank-heart")
const redHeart = document.querySelector(".red-heart");
const commentForm = document.querySelector(".feeds-comment-form");
const commentRedHeart = document.getElementsByClassName("comment-red-heart");
const commentBlankHeart = document.getElementsByClassName("comment-blank-heart");
const commentDelete = document.getElementsByClassName("delete");


function postComment() {
    if(commentInput.value !== ""){
        const newComment = document.createElement("p");
        const commentWriter = document.createElement("span");
        const commentContents = document.createElement("span");
        const heartIcon = document.createElement("i");
        const redHeart = document.createElement("i");
        const deletebtn = document.createElement("span");
        newComment.classList.add("comment-contents");
        commentWriter.innerHTML = "wecoder_frontend";
        commentWriter.classList.add("black-font");
        commentWriter.style.fontWeight = "bold";
        commentContents.innerHTML = commentInput.value;
        commentContents.classList.add("black-font");
        heartIcon.classList.add("far","fa-heart","gray-font","float-right","blank-heart","comment-blank-heart");
        redHeart.classList.add("fas","fa-heart","float-right","comment-red-heart","display-none");
        deletebtn.classList.add("blue-font","delete");
        deletebtn.innerHTML = "삭제";
        newComment.appendChild(commentWriter);
        newComment.appendChild(commentContents);
        newComment.appendChild(heartIcon);
        newComment.appendChild(redHeart);
        newComment.appendChild(deletebtn);
        commentBox.appendChild(newComment);
        commentInput.value = "";
    }

};

function refreshCommentHeart() {
    for (let i = 0; i < commentRedHeart.length; i++) {
        commentRedHeart[i].addEventListener("click", () => {
            commentRedHeart[i].classList.add("display-none");
        });
    }
    for (let i = 0; i < commentBlankHeart.length; i++) {
        commentBlankHeart[i].addEventListener("click", () => {
            commentRedHeart[i].classList.remove("display-none");
        });
    }
};

refreshCommentHeart();

function refreshCommentDelete() {
    for (let i = 0; i < commentDelete.length; i++) {
        commentDelete[i].addEventListener("click", (e)=>{
            e.target.parentElement.remove();
        })
    }
};

refreshCommentDelete();

commentBtn.addEventListener("click", ()=>{
    postComment();
    refreshCommentHeart();
    refreshCommentDelete();
});

commentForm.addEventListener("keydown", (e)=>{
    if(e.code == "Enter") {
        e.preventDefault();
        postComment();
        refreshCommentHeart();
        refreshCommentDelete();
    }
})


function heartToggle() {
    redHeart.classList.toggle("display-none");
};

blankHeart.addEventListener("click", ()=>{
    heartToggle();
});
