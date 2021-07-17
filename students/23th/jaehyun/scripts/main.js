const searchInput = document.getElementsByClassName("searchInput")[0];
const searchIcon = document.getElementsByClassName('searchIcon')[0];
const searchText = document.getElementsByClassName('searchText')[0];

const replyInput = document.getElementsByClassName('replyInput')[0];
const postButton = document.getElementsByClassName('postButton')[0];
const replies = document.getElementById('reply');
const deleteButton = document.getElementById('delete');

function home() {
    window.location.reload();
}

function inputPostionMove() {
    searchIcon.style.left = '10px';
    searchText.style.left = '20px';
}

searchInput.addEventListener('input', e => {
    searchText.style.visibility = 'hidden';
})

function addComment(commentValue) {
    const newComment = document.createElement('li');
    const newName = document.createElement('span');
    const newContent = document.createElement('span');
    const deleteButton = document.createElement('p');

    newName.classList.add('name');
    deleteButton.classList.add('delete');
    newName.innerText = 'Test ';
    newContent.innerText = commentValue;
    deleteButton.innerText = 'x';

    newComment.appendChild(newName);
    newComment.appendChild(newContent);
    newComment.appendChild(deleteButton);
    replies.appendChild(newComment);

    deleteButton.addEventListener('click', () => {
        newComment.remove();
    })

    replyInput.value = '';
}

function validateComment() {
    const commentValue = replyInput.value;
    if (commentValue.length > 0) {
        addComment(commentValue);
        return;
    }
    else {
        alert('댓글을 입력해주세요')
        return;
    }
}

postButton.addEventListener('click', validateComment);