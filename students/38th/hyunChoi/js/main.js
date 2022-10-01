//     1. 버튼 활성화 - 색상? (disable)
//     2. 버튼 비활성화
//     3. comment 게시
//     4. input에 입력된 comment 지우기
//     5. 생성된 comment 지우기
//     6. commen like 기능 

let commentItem = document.querySelector("comment"); // 댓글 wrap
let commentInput = document.getElementsByClassName("commentInput")[0]; // 입력요소
let commentButton = document.getElementsByClassName("commentButton")[0]; // 입력 버튼
let commentWrap = document.getElementsByClassName("feedDesc")[0] // 게시글 comment Wrap
let commentLikeHeart = document.getElementsByClassName('like')[0]

function buttonON() { // 1. 버튼 활성화
    commentButton.disabled = false;
    commentButton.style.color = '#000000';
}

function buttonOFF() {// 2. 버튼 비활성화
    commentButton.disabled = true;
    commentButton.style.color = 'gray';
}

function commentSubmit() { // 3. comment 게시
    let comment = commentInput.value;
    let commentWrap = document.createElement('div')
    let commentIdPtag = document.createElement('p')
    let commentContentPtag = document.createElement('p')
    let commentDeleteSpantag = document.createElement('span')
    let commentLikeSpantag = document.createElement('span')


    commentIdPtag.className = 'ptagID'
    commentIdPtag.innerHTML = 'hyun._.gus'
    commentContentPtag.innerHTML = comment
    commentDeleteSpantag.className = 'delete'
    commentDeleteSpantag.innerHTML = "X"
    commentLikeSpantag.className = 'like'
    commentLikeSpantag.innerHTML = "&#x2661"
    let newComment = document.getElementsByClassName('feedDesc')[0].appendChild(commentWrap)
    newComment.appendChild(commentIdPtag)
    newComment.appendChild(commentContentPtag)
    newComment.appendChild(commentLikeSpantag)
    newComment.appendChild(commentDeleteSpantag)
}


function initInputComment() { // 4. input에 입력된 comment 지우기
    commentInput.value = ""
}

function commentDelete(event){
  // let deleteX = document.getElementsByClassName('delete')[0]; // delete X
  event.target.parentElement.remove();
}

function commentLike(event){
  // let likeHeart = document.getElementsByClassName('like')[0]
  event.target.className = "liked"
  event.target.innerHTML = "&#x2665"
}

function commentUnLike(event){
  // let likedHeart = document.getElementsByClassName('liked')[0]
  event.target.className = "like"
  event.target.innerHTML = "&#x2661"
}

// commentInput의 value에 따른 commentButton 활성화 이벤트
commentInput.addEventListener('keyup', function () {
    if (commentInput.value.length > 0) {
        buttonON()
    } else {
        buttonOFF()
    }
})

// commentButton을 클릭하면 commentInput의 value가 게시되는 이벤트
commentButton.addEventListener('click', function () {
    commentSubmit() //  comment 게시
    initInputComment() // input 내용 삭제
})

commentInput.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        commentSubmit()
        initInputComment()
    }
})

commentWrap.addEventListener('click', function(event){
  if(event.target.className === 'delete'){
    commentDelete(event)
  }else{
    return
  }
})

commentWrap.addEventListener('click', function(event){
  console.log(event.target)
  if(event.target.className === 'like'){
    commentLike(event)
  }else if(event.target.className === 'liked'){
    commentUnLike(event)
  }
})
