//     1. 버튼 활성화 - 색상? (disable)
//     2. 버튼 비활성화
//     3. comment 게시
//     4. input에 입력된 comment 지우기
//     5. 생성된 comment 지우기

let commentItem = document.querySelector("comment"); // 댓글 wrap
let commentInput = document.getElementsByClassName("commentInput")[0]; // 입력요소
let commentButton = document.getElementsByClassName("commentButton")[0]; // 입력 버튼
let commentWrap = document.getElementsByClassName("feedDesc")[0] // 게시글 comment Wrap

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


    commentIdPtag.className = 'ptagID'
    commentIdPtag.innerHTML = 'hyun._.gus'
    commentContentPtag.innerHTML = comment
    commentDeleteSpantag.className = 'delete'
    commentDeleteSpantag.innerHTML = "X"
    let newComment = document.getElementsByClassName('feedDesc')[0].appendChild(commentWrap)
    newComment.appendChild(commentIdPtag)
    newComment.appendChild(commentContentPtag)
    newComment.appendChild(commentDeleteSpantag)
}


function initInputComment() { // 4. input에 입력된 comment 지우기
    commentInput.value = ""
}

function commentDelete(event){
  let deleteX = document.getElementsByClassName('delete')[0]; // delete X
  event.target.parentElement.remove();
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
  console.log(event.target)
  console.log(document.getElementsByClassName('delete')[0])
  if(event.target.className === 'delete'){
    commentDelete(event)
  }else{
    return
  }
})
