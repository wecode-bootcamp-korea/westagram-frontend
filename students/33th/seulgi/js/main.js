const commentInput = document.querySelector('.commentInput');
const commentAdd = document.querySelector('.commentAdd');
const article_comment = document.querySelector('.article_comment');

const onAdd = () => {
    const text = commentInput.value;
        if (commentInput.value === '') {
            commentInput.focus();
            return;
        }

    
    const commentId = document.createElement('span');
    commentId.setAttribute('class', 'commentId');
    commentId.innerHTML = 'username';
    
    const commentDetail = document.createElement('span');
    commentDetail.setAttribute('class', 'commentDetail');

	const itemText = document.createElement('span');
	itemText.setAttribute('class', 'itemText');
	itemText.innerHTML = text + '<br>';
	
	// 댓글 삭제 기능
	// const itemDel = document.createElement('button');
	// itemDel.setAttribute('class', 'itemDel');
	// itemDel.innerHTML = '삭제';
	// itemDel.addEventListener('click', () => {
	// 	article_comment.removeChild(commentDetail);
	// });

    article_comment.appendChild(commentId);
    commentDetail.appendChild(itemText);
    // commentDetail.appendChild(itemDel);
    article_comment.appendChild(commentDetail);
    commentInput.value = '';
    commentInput.focus();

};

commentAdd.addEventListener('click', () => {
    onAdd();
});

commentInput.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		onAdd();
	}
	return;
});