'user static';

const userProfileImg = document.getElementsByClassName('circle_profile_img');

for(let i=0; i<userProfileImg.length; i++) {
    if(i % 2 === 0) {
        userProfileImg[i].src = 'https://images.unsplash.com/photo-1638893427709-28865ba8f183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

    } else {
        userProfileImg[i].src = 'https://images.unsplash.com/photo-1638986404993-ab1a1be1f8e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80';
    }
}

// 댓글 textarea 영역에 코멘트 많이 입력하면 자동으로 사이즈 늘어나기
// const comment = document.querySelector('.post_comment_wrap textarea');
// const commentFixHeight = comment.clientHeight;

// comment.addEventListener('keydown', () => {
//     if(commentFixHeight < comment.scrollHeight) {
//         comment.style.height = `${comment.scrollHeight}px`;
//     } else {
//         comment.style.height = 'auto';
//     }
// })