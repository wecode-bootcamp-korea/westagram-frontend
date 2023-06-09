const submitBtn = document.getElementsByClassName('submitBtn')[0]; //ClassName으로 부르면 배열로 불러와 지기 때문에 내가 쓰고싶은 submitBtn 몇번째인지 입력
const commentInput = document.querySelector('#commentPost input');
const commentsBox = document.querySelector('.commentsBox ul'); 


function deleteComment(event){
    const li = event.target.parentElement.parentElement;
    li.remove();
}

// function likeComment(event){
//     commentHartBtn.classList.toggle("active");
//     commentHartBtnFa.classList.toggle("fa-solid")
    
// }


//새로운 댓글
function createComment(newComment){
    const li = document.createElement("li");
    const left = document.createElement("div");
    const commentId = document.createElement("div");
    const comment = document.createElement("div");
    const right = document.createElement("div");
    const commentRemoveBtn = document.createElement("button");
    const commentHartBtn = document.createElement("button");
    const commentHartBtnFa = document.createElement("i");

    li.classList.add("commentBox");
    left.classList.add("left")
    commentId.classList.add("commentId");
    comment.classList.add("Comment");
    right.classList.add("right");
    commentRemoveBtn.classList.add("commentRemoveBtn");
    commentHartBtn.classList.add("commentHartBtn");
    commentHartBtnFa.classList.add("fa-regular", "fa-heart");

    commentId.innerText = "z_nius_";
    comment.innerText = newComment;
    commentRemoveBtn.innerText = "X";

    commentRemoveBtn.addEventListener("click", deleteComment);
    commentHartBtn.addEventListener("click", function(){
        commentHartBtn.classList.toggle("active");
    commentHartBtnFa.classList.toggle("fa-solid")
    });

    right.appendChild(commentRemoveBtn);
    commentHartBtn.appendChild(commentHartBtnFa);
    right.appendChild(commentHartBtn);
    left.appendChild(commentId);
    left.appendChild(comment);
    li.appendChild(left);
    li.appendChild(right);
    commentsBox.appendChild(li);
}

function commentSubmit(event){
    event.preventDefault(); //부모영역 기본기능 막는 함수
    const newComment = commentInput.value;
    commentInput.value = ""; //댓글 개시 후 input창 초기화

    createComment(newComment);
}


// 기본 댓글
function currentComment(){
    const commentArr = ['너어무 기여워','돼지','예쁘다~~']

    commentArr.forEach((el)=>{
        const li = document.createElement("li");
        const left = document.createElement("div");
        const commentId = document.createElement("div");
        const comment = document.createElement("div");
        const right = document.createElement("div");
        const commentRemoveBtn = document.createElement("button");
        const commentHartBtn = document.createElement("button");
        const commentHartBtnFa = document.createElement("i");
    
        li.classList.add("commentBox");
        left.classList.add("left")
        commentId.classList.add("commentId");
        comment.classList.add("Comment");
        right.classList.add("right");
        commentRemoveBtn.classList.add("commentRemoveBtn");
        commentHartBtn.classList.add("commentHartBtn");
        commentHartBtnFa.classList.add("fa-regular", "fa-heart");
    
        commentId.innerText = "z_nius_";
        comment.innerText = el;
        commentRemoveBtn.innerText = "X";
    
        commentRemoveBtn.addEventListener("click", deleteComment);
        commentHartBtn.addEventListener("click", function(){
            commentHartBtn.classList.toggle("active");
            commentHartBtnFa.classList.toggle("fa-solid")
        });
    
        right.appendChild(commentRemoveBtn);
        commentHartBtn.appendChild(commentHartBtnFa);
        right.appendChild(commentHartBtn);
        left.appendChild(commentId);
        left.appendChild(comment);
        li.appendChild(left);
        li.appendChild(right);
        commentsBox.appendChild(li);
    })
}

currentComment()


submitBtn.addEventListener("click", commentSubmit);
