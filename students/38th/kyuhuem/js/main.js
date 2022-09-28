const replyInput = document.getElementById('reply-input');
const replyBtn = document.getElementById('reply-button');
const replyContents = document.getElementById('reply-content');

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


const putInReply = () => {
    replyContents.textContent = replyInput.value;
}

replyBtn.addEventListener('click',putInReply)

/*onclick에 함수를 실행한다.
함수 내용은 replyInput 안의 내용을 replyContents안에 집어 넣는 것.*/