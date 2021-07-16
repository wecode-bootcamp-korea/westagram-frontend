let inputText = document.getElementById('commentText');
let navId = document.getElementById(`navIdProfile`);
let commentContents = document.getElementById(`commentContents`);
let commmentBox = document.getElementById(`commentBlock`)
let commentBtn = document.getElementById(`commentBtn`);

document.addEventListener('keyup', function() {
    if (inputText.value) {                 
        commentBtn.style.color = "#0095F6";
    }
});

inputText.addEventListener('keyup', function(keyNum) {
    if(keyNum.code === 'Enter') {
        if(inputText.value) {
            console.log('키다운 이벤트!');

            let nodeDiv = document.createElement('div');
            let nodeId = document.createElement('p');
            let nodeSpan = document.createElement('p');

            commmentBox.appendChild(nodeDiv);
            nodeDiv.appendChild(nodeId);
            nodeDiv.appendChild(nodeSpan);

            nodeId.innerText = navId.innerText;
            nodeSpan.innerText = inputText.value;
            inputText.value = "";
            commentBtn.style.color = 'rgba(var(--d69,0,149,246),.3)';

            // 스타일링
            nodeDiv.classList.add('commentContentsDiv');
            nodeId.classList.add('commentContentsId');
            nodeSpan.classList.add('commentContentsSpan');
        } else {
            alert ('댓글을 입력하세요!');
        }
    };
});

commentBtn.addEventListener('click', function() {
        if(inputText.value) {
            let nodeDiv = document.createElement('div');
            let nodeId = document.createElement('p');
            let nodeSpan = document.createElement('p');

            commmentBox.appendChild(nodeDiv);
            nodeDiv.appendChild(nodeId);
            nodeDiv.appendChild(nodeSpan);

            nodeId.innerText = navId.innerText;
            nodeSpan.innerText = inputText.value;
            inputText.value = "";
            commentBtn.style.color = 'rgba(var(--d69,0,149,246),.3)';

            // 스타일링
            nodeDiv.classList.add('commentContentsDiv');
            nodeId.classList.add('commentContentsId');
            nodeSpan.classList.add('commentContentsSpan');
        } else {
            alert ('댓글을 입력하세요!');
        };
});

