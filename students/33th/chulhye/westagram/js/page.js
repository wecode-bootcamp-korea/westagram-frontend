(() => {
    const replySecond = document.querySelector('.replySecond'); //들어갈 공간.
    const mainReply = document.querySelector('.mainReply'); //input.
    const replyBtn = document.querySelector('.replyBtn'); // 게시 버튼


    function clickBtn () {
        const replyText = mainReply.value;
        if(mainReply.value === ""){
            replyText.focus();
            return;
        }

        const commentList = document.createElement('li');
        commentList.setAttribute('class', 'commentList');

        const commentText = document.createElement('span');
        commentText.setAttribute('class', 'commentText');
        commentText.innerHTML = `<b>alrbnb</b> ` + replyText;

        const replyDel = document.createElement('button');
        replyDel.setAttribute('class', 'replyDel');
        replyDel.innerHTML = 'x';
        replyDel.addEventListener('click', () => {
            replySecond.removeChild(commentList);
        });

        commentList.appendChild(commentText);
        commentList.appendChild(replyDel);
        replySecond.appendChild(commentList);
        mainReply.value = "" ;
        mainReply.focus();

    }
    
    replyBtn.addEventListener('click', () => {
        clickBtn();
    });
    mainReply.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter') {
            clickBtn();
        }
    })

})();