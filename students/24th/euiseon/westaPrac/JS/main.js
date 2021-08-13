const commentInput = document.getElementsByClassName('comment-box')[0];
const commentBtn = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];


commentBtn.addEventListener("keydown", function(e) {
    if (commentInput.value.length > 0 && e.keyCode === 13){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(commentInput.value));
        commentList.appendChild(li);
    }
});





/*commentBtn.addEventListener("keypress", function(event) {
    if (commentInput.value.length > 0 && event.keyCode === 13) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(commentInput.value));
        commentList.appendChild(li);
        commentInput = "";
    }
});*/




