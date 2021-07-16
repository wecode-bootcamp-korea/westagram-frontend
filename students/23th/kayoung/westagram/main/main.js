const replyForm = document.querySelector(".replyForm");
const replyInput = document.querySelector(".replyInput");
const replyButton = document.querySelector(".replyButton");

//'게시'버튼을 클릭하면 댓글이 추가된다
replyInput.addEventListener("keydown", function(e) {
    replyButton.removeAttribute("disabled");
})
