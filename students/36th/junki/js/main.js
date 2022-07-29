const commentButton = document.querySelectorAll('.commentButton')
const commentContainer = document.querySelectorAll('.commentContainer')
const commentInput = document.querySelectorAll('.commentInput')
//---------------------------------댓글 구현---------------------------------//

commentButton.forEach((btn, idx) => btn.addEventListener('click', () => commentAdd(idx)))

commentInput.forEach((input, idx) => input.addEventListener('keyup', (key) => {
    if (key.key === 'Enter') commentAdd(idx)
    commentButtonStyle(idx)
}))

function commentButtonStyle(idx) {
    if (commentInput[idx].value.length > 0) {
        commentButton[idx].style.color = '#0095F6'
        commentButton[idx].style.fontWeight = 'bold'
    } else {
        commentButton[idx].style = '';
    }
}

function commentAdd(idx) {
    if (commentInput[idx].value == '') return;
    const commentBoxDiv = document.createElement('div')
    const commentDiv = document.createElement('div')
    const userNameSpan = document.createElement('span')
    const meEngName = document.querySelector(".meEngName")
    const imgDiv = document.createElement('div')
    const closeImgTag = document.createElement('img')
    const heartImgTag = document.createElement('img')


    commentBoxDiv.classList.add('commentBox')
    commentDiv.classList.add('comment')
    userNameSpan.classList.add('userName')
    closeImgTag.classList.add('commentClose')
    heartImgTag.classList.add('commentHeart')
    imgDiv.classList.add('commentImgBox')

    closeImgTag.src = './img/close.png'
    heartImgTag.src = './img/heart.png'
    userNameSpan.innerText = meEngName.innerText

    imgDiv.appendChild(closeImgTag)
    imgDiv.appendChild(heartImgTag)
    commentDiv.appendChild(userNameSpan)
    commentBoxDiv.appendChild(commentDiv)
    commentBoxDiv.appendChild(imgDiv)

    commentDiv.innerHTML += commentInput[idx].value
    commentContainer[idx].appendChild(commentBoxDiv);
    commentInput[idx].value = '';
    commentButtonStyle(idx)
    closeImgTag.addEventListener('click', ()=>commentClose(commentBoxDiv,idx))
    heartImgTag.addEventListener('click', ()=>commentHeart(heartImgTag))

    commentCount(idx)
}
                    /* 함수가 실행되면 아래와 같은 폼이 됨
                    <div class="commentBox">
                        <div class="comment">
                            <span class="userName">${meEngName}</span>${commentInput.value}
                        </div>
                        <div class="commentImgBox">
                            <img src="./img/close.png" class="commentClose">
                            <img src="./img/heart.png" class="commentHeart">
                        </div>
                    </div> 
                    */
//--------------------------------------------------------------------------//

const cssHeart = document.querySelectorAll('.commentHeart')
cssHeart.forEach((heart) => heart.addEventListener('click', () => commentHeart(heart)))

function commentClose(commentBoxDiv,idx) {
    commentBoxDiv.remove()
    commentCount(idx)
}

function commentHeart(heart){
    if(heart.classList.contains('commentRedHeart')){
        heart.classList.remove('commentRedHeart')
    }else{
        heart.classList.add('commentRedHeart')
    }
}

const commentMore = document.querySelectorAll('.commentMore')
commentMore.forEach((_, idx)=>commentCount(idx))
function commentCount(idx){
    let commentCount = commentContainer[idx].getElementsByClassName('commentBox').length
    commentMore[idx].innerText=`댓글 ${commentCount}개`
}