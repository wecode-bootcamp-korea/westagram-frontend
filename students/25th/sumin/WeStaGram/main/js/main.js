
const commentInput = document.querySelector('.chat2');

function commentSubmit(){
    const chatBox = document.querySelector('.test');    
    const commentID = document.createElement('div'); // userName
    const commentEL = document.createElement('span');  //댓글
    const heartSpan = document.createElement('span');
    const heartIcon = document.createElement('img'); //하트아이콘
    // const heartSpan = document.querySelector('.binheartBox');
    const countEL = document.querySelector('.commentCount'); //댓글 count
    const count = countEL.innerText;

    commentID.classList.add('commendId');
    commentEL.classList.add('commend');
    heartSpan.classList.add('binheartBox')
    heartIcon.classList.add('binheart');

    heartIcon.setAttribute('src', 'img/heart.png');

    commentID.innerText = 'aaa__aaa';
    commentEL.innerText = commentInput.value;
    countEL.innerText = parseInt(count) + 1;

    commentID.appendChild(commentEL);
    // commentID.appendChild(heartSpan);
    heartSpan.appendChild(heartIcon);

    chatBox.appendChild(commentID);
    commentID.appendChild(heartSpan);
}

commentInput.addEventListener("keydown",(event) => {
    if (event.code === "Enter") {
        commentSubmit();
        commentInput.value = " ";
    }
})


