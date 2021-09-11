// 댓글 입력 후 엔터키를 누르거나 게시 버튼 클릭 시 댓글이 추가될 수 있도록 구현해주세요.
(()=> {
    const commentForm = document.querySelector(".comment_input > form");
    const commentBtn = document.querySelector(".comment_btn");

    function commentHandler(e){
        e.preventDefault();
        const commentInput = document.querySelector(".comment_input_txt");
        const commentInputValue = commentInput.value;

        function comment(){
            const feedsComment = document.querySelector(".feeds_comment_like_btn_box");
            const commentBoxClassName = 'comment_box';
            const commentUesrsId = 'feeds_comment_uesrs_id';
            const commentBox = document.createElement('div');
            const commentContainer = document.createElement('p');
            const commentContainerInUesrsId = document.createElement('span');
            const commentContainerInComment = document.createElement('span');

            

            commentBox.setAttribute('class', commentBoxClassName);
            commentContainerInUesrsId.setAttribute('class', commentUesrsId)

            commentContainerInUesrsId.innerHTML = "Jetom";
            commentContainerInComment.innerHTML = commentInputValue;

            feedsComment.after(commentBox);
            commentBox.append(commentContainer);
            commentContainer.append(commentContainerInUesrsId);
            commentContainer.append(commentContainerInComment);
        }

        comment();
    }
    commentForm.addEventListener('submit', commentHandler);
})()

