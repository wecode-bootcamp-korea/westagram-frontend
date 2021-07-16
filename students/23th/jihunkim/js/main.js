


const commentInput = document.getElementById('input-comment');
// const commentBtn = document.getElementById('#submit-comment');
// const commentList = document.getElementById('#input-comment');
const commentBtn = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];

commentInput.addEventListener('keypress', function(e){
    if (commentInput.value) {
        if (e.which === 13) // Enter key is pressed {
            var newComment = document.createElement('li')
            newComment.innerHTML = `<span><span class="point-span userID">alan walker&nbsp&nbsp&nbsp</span>` + this.value + `</span><img class="comment-heart" src="http://127.0.0.1:5500/students/23th/jihunkim/img/heart_s.png" alt="heart">`;
            commentList.appendChild(newComment);
            this.value = "";
        }
    }
})

commentBtn.addEventListener('click', function(){
    if (commentInput.value) {
        var newComment = document.createElement('li')
        newComment.innerHTML = `<span><span class="point-span userID">alan walker&nbsp&nbsp&nbsp</span>` + commentInput.value + `</span><img class="comment-heart" src="http://127.0.0.1:5500/students/23th/jihunkim/img/heart_s.png" alt="heart">`;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
});

commentInput.addEventListener('keyup', function(e) {
    commentInput.value ? commentBtn.disabled = false : commentBtn.disabled = true;
    });