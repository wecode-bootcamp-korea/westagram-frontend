const inputText = document.querySelector('.replyText');
const changeBtn = document.querySelector('.replySubmit');
const likeHeart = document.querySelector('.reHeart');

inputText.addEventListener('keyup', () => {
    if (inputText.value.length >= 1) {
         changeBtn.classList.add("buttonChange");
    } else {
        changeBtn.classList.remove("buttonChange");
    }
})


changeBtn.addEventListener('click', () => {
    const artBox = document.querySelector('article')
    const newReply = document.createElement('div');
    const newContent = document.createElement('div');
    const newId = document.createElement('a');
    const newText = document.createElement('span');
    const newImg = document.createElement('img');

    newReply.className = "reply";
    newContent.className = "content";
    newId.className = "Id";
    newText.className = "reText";
    newImg.className = "reHeart";

    newId.innerText = "sstaar_mx"
    newText.innerText = inputText.value;
    newImg.src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"

    artBox.append(newReply);
    newReply.appendChild(newContent);
    newContent.appendChild(newId);
    newContent.appendChild(newText);
    newReply.appendChild(newImg);
})