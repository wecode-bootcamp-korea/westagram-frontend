function postComment() {
    const commentNode = document.querySelector('.commentInput');
    const commentText = commentNode.value;

    if(commentText) {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        newComment.className = "comment";

        const commentsListNode = document.querySelector('.commentsList'); 
        commentsListNode.appendChild(newComment);
  
        const myUsername = document.createElement('span');
        myUsername.className = 'bold';
        myUsername.textContent = 'wecode_bootcamp ';
        newComment.insertBefore(myUsername,newComment.firstChild); // adds myUsername before the comment

        const likeBtn = document.createElement('img');
        likeBtn.src = '../img/heart.png';
        likeBtn.className = 'smallIcon';
        commentsListNode.appendChild(likeBtn);

        commentNode.value = ''; // clears the input box after comment added
    }
}

const commentBtn = document.getElementsByClassName('commentBtn')[0];
commentBtn.addEventListener('click', postComment);

document.querySelector('.commentInput').addEventListener('keypress', function(e) {
    e.key === 'Enter' ? postComment() : null;
});