const commentUl = document.querySelector('.comment-ul');
const input = document.querySelector('.comment-input');
const addBtn = document.querySelector('.input-button');


function onAdd(){
    const text = input.value;
    if (text === '') {
        return;
    }
    const newComment = createComment(text);
    commentUl.appendChild(newComment);
    input.value = '';
}

function createComment(text) {
    const commentRow = document.createElement('li');
    commentRow.setAttribute('class','comment-row');

    const commentDel = document.createElement('div');
    commentDel.setAttribute('class','comment-del');

    const comment = document.createElement('div');
    comment.setAttribute('class','comment');

    const userName = document.createElement('span');
    userName.setAttribute('class', 'user-padding')
    userName.innerHTML = 'catttt022';

    const commentArea = document.createElement('span');
    commentArea.setAttribute('class','comment-area');
    commentArea.innerText = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','del-btn');
    delBtn.innerText = '삭제';
    delBtn.addEventListener('click', ()=>{
        commentUl.removeChild(commentRow);
    });

    comment.appendChild(userName);
    comment.appendChild(commentArea);

    commentDel.appendChild(comment);
    commentDel.appendChild(delBtn);

    commentRow.appendChild(commentDel);

    return commentRow;
}


addBtn.addEventListener('click', ()=>{
    onAdd();
});

input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter') {
        onAdd();
    }
});

//1.사용자가 입력한 텍스트 받아옴
//2.새로운 댓글을 만든다(텍스트+삭제버튼)
//3.comment-ul에 새로 만든 댓글 추가
//4.ul에 댓글 추가한 후(댓글 추가 버튼 누르면) input을 초기화 한다.

function activateBtn() {
    if(input.value.length>0) {
        addBtn.classList.add('activateBtn');
        addBtn.disabled = false;
    }else {
        addBtn.classList.remove('activateBtn');
        addBtn.disabled = true;
    }
}

input.addEventListener('keyup',()=>{
    activateBtn();
});