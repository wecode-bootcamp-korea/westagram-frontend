const likeButton = document.querySelector('#likeButton')
const postedComment = document.querySelector('.postedComment');
const comment = document.querySelector('.comment');
const postButton = document.querySelector('.postButton');
const likeButtonImage = document.querySelector('.button')


postButton.addEventListener('click', () => {
    postedComment.innerText = `admin ${comment.value}`;
    comment.value= "";
})

// 게시버튼 엔터키
postButton.addEventListener('keyup', (e) => {
    if(e.code === 'Enter') {
        postedComment.innerText = `admin ${comment.value}`;
        comment.value = '';
    }
});

// 좋아요 버튼
likeButton.addEventListener('click', () => {
    console.log(likeButtonImage)
    likeButtonImage.src = "images/redheart.png"
    
}) 