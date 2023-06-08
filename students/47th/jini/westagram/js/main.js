const submitBtn = document.getElementsByClassName('submitBtn')[0]; //ClassName으로 부르면 배열로 불러와 지기 때문에 내가 쓰고싶은 submitBtn 몇번째인지 입력
const commentInput = document.querySelector('#commentPost input');
const commentsBox = document.querySelector('.commentsBox ul');

function createComment(newComment){
    const li = document.createElement("li");
    const left = document.createElement("div");
    const CommentId = document.createElement("div");
    const Comment = document.createElement("div");
    const commentHart = document.createElement("div");
    const commentHartFa = document.createElement("i");

    left.classList.add("left")
    CommentId.classList.add("CommentId");
    Comment.classList.add("Comment");
    commentHart.classList.add("commentHart");
    commentHartFa.classList.add("fa-regular", "fa-heart");

    CommentId.innerText = "z_nius_";
    Comment.innerText = newComment;


    left.appendChild(CommentId);
    left.appendChild(Comment);
    commentHart.appendChild(commentHartFa);
    li.appendChild(left);
    li.appendChild(commentHart);
    commentsBox.appendChild(li);

}

function commentSubmit(event){
    event.preventDefault();
    const newComment = commentInput.value;
    commentInput.value = "";


    createComment(newComment);
}


submitBtn.addEventListener("click", commentSubmit);
