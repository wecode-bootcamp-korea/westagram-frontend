// 1. 댓글창에 댓글 달면 게시 버튼 활성화
// 2. 댓글을 입력하면 피드에 댓글 요소 추가
const listComment = document.getElementsByClassName('commentList');
const replyButton = document.getElementById('commentReply');
const inputComment = document.getElementById('commentInput');


//댓글창에 키 입력시 게시 버튼 활성화
inputComment.addEventListener("keyup", function(event) {
    if (inputComment.value) {
        replyButton.disabled = false;
    } else {
        replyButton.disabled = true;
    }
});

// 댓글창에 키 입력 후 게시버튼 클릭시 피드에 새로만든 댓글 생성
replyButton.addEventListener('click', function(event) {
    var newCommentLi = document.createElement('li');
    // var newComment = document.createElement('span');
    newCommentLi.innerText = inputComment.value;


    listComment[0].appendChild(newCommentLi);
    inputComment.value = "";
})