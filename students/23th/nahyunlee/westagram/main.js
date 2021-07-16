const reply = document.querySelector('.reply');
const replyButton = document.querySelector('.replybutton');

//enter를 칠 때, 댓글을 추가한다.  
reply.addEventListener('keydown', function (e) {
  //enter를 쳤을 때, 
  if (e.code === 'Enter') {
    //input의 값을 받아온다.
    let newReply = reply.value;
    //값을 넣을 공간을 만든다.
    let commentBox = document.createElement("p");
    //값이 있다면 프로세스 진행
    if (newReply) {
      commentBox.classList.add('.newComment'); //클래스명 추가
      commentBox.innerText = newReply; //작성한 값을 공간에 넣기
      //부모 노드에 자식노드 추가 
      document.querySelector('.desContainer').appendChild(commentBox);
      document.querySelector('.reply').value = '';
    }
  }

})

document.querySelector('.reply').value = "";


replyButton.addEventListener('click', function () {
  let newReply = reply.value;
  let commentBox = document.createElement("p");
  if (newReply) {
    commentBox.classList.add('.newComment');
    commentBox.innerText = newReply;
    document.querySelector('.desContainer').appendChild(commentBox);
    document.querySelector('.reply').value = '';

  }
  document.querySelector('.reply').value = "";
})