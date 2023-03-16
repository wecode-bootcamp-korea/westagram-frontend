// 1. 댓글창에 댓글 달면 게시 버튼 활성화
// 2. 댓글을 입력하면 피드에 댓글 요소 추가
const listComment = document.getElementsByClassName('commentList');
const replyButton = document.getElementById('commentReply');
const inputComment = document.getElementById('commentInput');

const deleteCommentUl = document.querySelector('ul.commentList');
const deleteCommentLi = document.querySelector('li.comment');

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
    newCommentLi.innerHTML = '<span><span class="textBold";>BaCoffee</span>' + ' ' + inputComment.value + '<img class="smallHeart" onclick="changeLikeHeart()" src="./img/heart.png"><span class="miniSubGray" onclick="deleteComment()" ">댓글삭제</span></span>';


    listComment[0].appendChild(newCommentLi);
    inputComment.value = "";
})

// 댓글의 하트를 클릭시 빨갛게 변경
function changeLikeHeart() {
    var changeHeart = document.getElementsByClassName('smallheart');
    console.log("빨갛게 좀 되봐바");
};


// 댓글 삭제를 누르면 삭제가 됨
function deleteComment() {
    // deleteCommentUl.removeChild(deleteCommentLi);    

    console.log("삭제 좀 되봐바");
}