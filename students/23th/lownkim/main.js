const comment = document.getElementsByClassName("comment");
const replyButton = document.getElementsByClassName("replyButton")[0];

function getValue(){
    if(comment.value){
        // 버튼 활성화하는 방법 추가
        replyButton.disabled = false;
        replyButton.style.backgroundColor = '#0095F6';
    } else {
        // 버튼 비활성화
        replyButton.disabled = true;
        replyButton.style.backgroundColor = '#c0dffd';
    }
}
comment.addEventListener("keyup", getValue);



나현님 코드
replyButton.addEventListener('click', function () {
    let newReply = reply.value;
    let commentBox = document.createElement("p"); //공간을 만든다.
    if (newReply) {
      commentBox.classList.add('.newComment');
      commentBox.innerText = newReply;
      document.querySelector('.desContainer').appendChild(commentBox);
      document.querySelector('.reply').value = '';
    }
  })


  // replyButton.addEventListener('click', function () {
  //   let newReply = reply.value;
  //   let commentBox = document.createElement("p"); //공간을 만든다.
  //   if (newReply) {
  //     commentBox.classList.add('.newComment');
  //     commentBox.innerText = newReply;
  //     document.querySelector('.desContainer').appendChild(commentBox);
  //     document.querySelector('.reply').value = '';
  //   }
  // })

  