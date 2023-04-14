const commentInput = document.getElementsByClassName('input-comment')[0];
const commentBtn = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];

function addNewComment() {
    const newComment = document.createElement('li');
    const commentBtns = document.createElement('div');
    newComment.innerHTML = `<span><span class="span_user">userId</span>
    ${commentInput.value}</span>`;
    
    newComment.appendChild(commentBtns);
    commentList.appendChild(newComment);
    commentInput.value = ""; // 발행 후 다시 리셋
    commentBtn.disabled = true;

    } 

    // 댓글 게시

    commentBtn.addEventListener('click', function(){
        if (commentInput.value) {
            addNewComment();
        }
    })
    
    commentInput.addEventListener('keyup', function(e){
        if (commentInput.value) {
            commentBtn.disabled = false; //댓글버튼 활성화
            if (e.keyCode === 13) {
                addNewComment(); 
            }
        }
        else {
        commentBtn.disabled = true;
        }
    })





instaComment();

