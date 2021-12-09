const comment = document.querySelector('.comment-input-text');
const commentBox = document.querySelector('.comment-wrapper');
const commentButton = document.querySelector('.comment-input-button');
// const commentValue = comment.value;
// 자바스크립트 비동기. 여기서(입력이전에) comment.value 값이 없는 것으로 읽힌다! 
// 그래서 변수는 함수안에서 선언 ---->찾아봐야함

function activeCommentBtn() {
    let commentValue = comment.value;
    if (commentValue) {
        commentButton.disabled = false;
        commentButton.style.color = "#0095f6";
    } else {
        commentButton.disabled = true;
        commentButton.style.color = "#c0dffd";
    }
};

function submitComment() {
    let commentValue = comment.value;
    let newCommentEl = document.createElement('div');
        newCommentEl.innerHTML  = 
        `
        <span class='user-name'>user_name</span> 
        <span class='comm-value'>${commentValue}</sapn>
        <span class='comm-heart'> <i class="far fa-heart"></i> </sapn>
        `;
    newCommentEl.classList.add('comm');
    commentBox.appendChild(newCommentEl); 
    comment.value = ' ';
    commentButton.disabled = true;
    commentButton.style.color = "#c0dffd";
    // comment.value의 값을 false로 바꿔주면 위의 두 줄을 생략할 수 있을 것 같은데, 
    // 'false'로 입력한 것 처럼 value값에 'false'라는 단어가 입력이 됩니다
    // 방법이 없을까?
};

function enterSubmit(e) {
    if (e.keyCode ==13 && commentButton.disabled === false) {
        submitComment();
    }
}

comment.addEventListener('keyup', activeCommentBtn);
commentButton.addEventListener('click', submitComment);
window.addEventListener('keyup', enterSubmit);