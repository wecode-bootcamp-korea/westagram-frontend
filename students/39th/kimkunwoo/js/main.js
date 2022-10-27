const uploadButton = document.querySelector(".upload_button");
const comment = document.querySelector(".write_newComment");
//const newCommentDiv = document.createElement("div");
function addComment() {    
    const commentWrapper = document.querySelector(".comment_wrapper");
    const newCommentDiv = document.createElement("div");
    newCommentDiv.className = "previous_comment"
    newCommentDiv.innerHTML = `<p><b>kunwoooo</b> ${comment.value} </p><img class="comment_likebutton" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">`;
    commentWrapper.appendChild(newCommentDiv);
}

uploadButton.addEventListener("click", function(){
    addComment();
    comment.value = "";
})

comment.addEventListener('keydown', function(e){
    if (e.keyCode === 13) { //엔터키 동작을 위한 코드
    addComment();
    comment.value = "";
    }
})

function deleteComment(){
    
}