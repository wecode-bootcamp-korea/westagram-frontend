// 1. 댓글창에 댓글 달면 게시 버튼 활성화 - ok!
// 2. 댓글을 입력하면 피드에 댓글 요소 추가 - ok!
// 3. 댓글의 하트를 누르면 빨갛게 변하기 - 
// 4. 댓글삭제 회색 문구를 누르면 삭제가 되게끔하기 -

const listComment = document.querySelector('.commentList');
const replyComment = document.querySelector('#commentReply');
const inputComment = document.querySelector('#commentInput');

const addComment = () => {
    const text = inputComment.value;

    const comment = document.createElement('li');
    comment.setAttribute('class', 'comment');
    
    const commentText = document.createElement('span');
    commentText.innerHTML = text;

    const commentLike = document.createElement('img');
    commentLike.setAttribute('src', './img/heart.png');
    commentLike.setAttribute('class', 'smallHeart');
    commentLike.addEventListener('click', function() {

    })

    const commentDel = document.createElement('span');
    commentDel.setAttribute('class', 'miniSubGray');
    commentDel.innerHTML = '댓글삭제';
    commentDel.addEventListener('click', function() {
        listComment.removeChild(comment);
    })

    comment.appendChild(commentText);
    comment.appendChild(commentLike);
    comment.appendChild(commentDel);
    listComment.appendChild(comment);

    console.log(text);
};

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

// 댓글창에 키 입력 후 게시버튼 클릭시 피드에 새로만든 댓글 생성
replyComment.addEventListener('click', function(event) {
    
})

// 댓글의 하트를 클릭시 빨갛게 변경
function changeLikeHeart() {
    var changeHeart = document.getElementsByClassName('smallheart');
    console.log("빨갛게 좀 되봐바");
};


// 댓글 삭제를 누르면 삭제가 됨
