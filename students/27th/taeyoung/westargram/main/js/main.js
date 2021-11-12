const getRecomment = document.querySelector('.recommnetInput');
const recommentButton = document.querySelector('.recommnetBt');
const commentBox = document.querySelector('.feedComment');

// // 엔터 keyup 댓글
function getComment(e) {

    if (e.keyCode === 13 && getRecomment.value) {
        
        let feedCommentLeft = document.createElement('div'); // 다음 댓글 전체 영역
        let feedUserBox = document.createElement('div'); // 댓글 묶음

        let feedUserName = document.createElement('span'); // 작성자 이름 영역
        let feedLike = document.createElement('span'); // 좋아요 영역
        let likeIcon = document.createElement('i');// 좋아요 아이콘
        
        let moreComment = document.createElement('span'); // 댓글 영역
        let feedTime = document.createElement('span'); // 시간 영역

        commentBox.appendChild(feedCommentLeft); //
        feedCommentLeft.appendChild(feedUserBox); //
        feedUserBox.appendChild(feedUserName); // 
        feedUserBox.appendChild(feedLike); // 
        feedLike.appendChild(likeIcon); // 

        feedCommentLeft.appendChild(moreComment); // comment 닉네임을 자식요소로
        feedCommentLeft.appendChild(feedTime); // Container에 타임을 자식요소로

        feedCommentLeft.className = "feedCommentLeft";
        feedUserBox.className = "feedUserBox";
        feedUserName.className = "feedUserName";
        feedLike.className = "feedLike";
        likeIcon.className = "far fa-heart";
        moreComment.className = "moreComment";
        feedTime.className = "feedTime";

        feedUserName.innerHTML = "taeyong";
        moreComment.innerHTML = getRecomment.value;
        feedTime.innerHTML = "1시간 전";

        getRecomment.value = '';
    }
};

// 게시 버튼 click 댓글 
function gettComment() {

    if (getRecomment && getRecomment.value) {
        
        let feedCommentLeft = document.createElement('div'); // 다음 댓글 전체 영역
        let feedUserBox = document.createElement('div'); // 댓글 묶음

        let feedUserName = document.createElement('span'); // 작성자 이름 영역
        let feedLike = document.createElement('span'); // 좋아요 영역
        let likeIcon = document.createElement('i');// 좋아요 아이콘
        
        let moreComment = document.createElement('span'); // 댓글 영역
        let feedTime = document.createElement('span'); // 시간 영역

        commentBox.appendChild(feedCommentLeft); //
        feedCommentLeft.appendChild(feedUserBox); //
        feedUserBox.appendChild(feedUserName); // 
        feedUserBox.appendChild(feedLike); // 
        feedLike.appendChild(likeIcon); // 

        feedCommentLeft.appendChild(moreComment); // comment 닉네임을 자식요소로
        feedCommentLeft.appendChild(feedTime); // Container에 타임을 자식요소로

        feedCommentLeft.className = "feedCommentLeft";
        feedUserBox.className = "feedUserBox";
        feedUserName.className = "feedUserName";
        feedLike.className = "feedLike";
        likeIcon.className = "far fa-heart";
        moreComment.className = "moreComment";
        feedTime.className = "feedTime";

        feedUserName.innerHTML = "taeyong";
        moreComment.innerHTML = getRecomment.value;
        feedTime.innerHTML = "1시간 전";

        getRecomment.value = '';
        
    }

};

getRecomment.addEventListener('keydown', getComment);
recommentButton.addEventListener('click', gettComment);







//좋아요 버튼색 변경
const color = document.querySelectorAll('.fa-heart');

// color.forEach(element => {
//     if (element.style.color === 'balck') {
//         element.style.color = 'red';
//     } else if (element.style.color === 'red') {
//         element.style.color = 'balck';
//     };
// });


color.addEventListener('click', );

