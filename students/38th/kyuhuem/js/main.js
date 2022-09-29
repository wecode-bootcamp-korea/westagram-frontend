const replyInput = document.getElementById('reply-input');
const replyBtn = document.getElementById('reply-button');
const replyContents = document.getElementById('reply-content');
const replyComments = document.getElementById('reply-comments');
const replyUser = document.getElementById('reply-user')
const verifyReply = () => {
    const replyValue = replyInput.value.length;
    return replyValue > 0 ? true : false;
}

const activateBtn = () => {
    if (verifyReply()) {
        replyBtn.disabled = false;
    } else {
        replyBtn.disabled = true;
    }
}

replyInput.addEventListener('keyup',activateBtn);


const putInReply = (e) => {
    const repl = document.createElement('div');
    repl.className = 'reply-content';
    repl.innerHTML = replyInput.value;
    replyContents.appendChild(repl);
}

const putInUser = (e) => {
    const user = document.createElement('div');
    user.className = 'reply-user';
    user.innerHTML = 'Odor';
    replyUser.appendChild(user);
}


replyBtn.addEventListener('click',putInReply);
replyBtn.addEventListener('click',putInUser);

/*click에 함수를 실행한다.
함수 내용은 replyInput 안의 내용을 replyContents안에 집어 넣는 것.*/