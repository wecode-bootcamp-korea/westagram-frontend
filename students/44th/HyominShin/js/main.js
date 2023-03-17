// 1. 댓글창에 댓글 달면 게시 버튼 활성화 - ok!
// 2. 댓글을 입력하면 피드에 댓글 요소 추가 - ok!
// 3. 댓글의 하트를 누르면 빨갛게 변하기 - 
// 4. 댓글삭제 회색 문구를 누르면 삭제가 되게끔하기 - ok!

const listComment = document.querySelector('.commentList');
const replyComment = document.querySelector('#commentReply');
const inputComment = document.querySelector('#commentInput');

// 게시 버튼을 눌렀을 때 함수 발생
const addComment = () => {
    const text = inputComment.value;

    const comment = document.createElement('li');
    comment.setAttribute('class', 'comment');
    
    const commentText = document.createElement('span');
    commentText.innerHTML = text;

    const commentLike = document.createElement('img');
    let changeLike = 1;
    commentLike.setAttribute('src', './img/heart.png');
    commentLike.setAttribute('class', 'smallHeart');
    
    // 댓글의 하트를 누르면 빨갛게 변화
    commentLike.addEventListener('click', function() {
        if (changeLike % 2 === 1) {
            commentLike.setAttribute('src', './img/fillheart.png');
            changeLike++;
        } else {
            commentLike.setAttribute('src', './img/heart.png');
            changeLike++;
        };
    });

    // 댓글의 회색 삭제를 누르면 해당 댓글 삭제
    const commentDel = document.createElement('span');
    commentDel.setAttribute('class', 'miniSubGray');
    commentDel.innerHTML = '댓글삭제';
    commentDel.addEventListener('click', function() {
        listComment.removeChild(comment);
    });

    comment.appendChild(commentText);
    comment.appendChild(commentLike);
    comment.appendChild(commentDel);
    listComment.appendChild(comment);
};

// 피드에 댓글 입력시 댓글창 clear
replyComment.addEventListener('click', () => {
    addComment();
    inputComment.value = '';
});

//댓글창에 키 입력시 게시 버튼 활성화
inputComment.addEventListener("keyup", function(event) {
    if (inputComment.value) {
        replyComment.disabled = false;
    } else {
        replyComment.disabled = true;
    }
});
