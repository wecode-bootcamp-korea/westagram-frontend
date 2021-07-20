// 게시버튼 활성화 기능

const commentInput = document.getElementsByClassName("commentInput")[0];
const replyButton = document.getElementsByClassName("replyButton")[0];

function getValue(){
    if(commentInput.value){
        // 버튼 활성화하는 방법 추가
        replyButton.disabled = false;
        replyButton.style.color = '#0095F6';
    } else {
        // 버튼 비활성화
        replyButton.disabled = true;
        replyButton.style.color = '#c0dffd';
    }
}

commentInput.addEventListener("keyup", getValue);



// 댓글 달기 나현님 코드
replyButton.addEventListener('click', function () {
    let newReply = commentInput.value;
    let commentBox = document.createElement("p"); //공간을 만든다.  <p></p>

    if (newReply) {
    //   commentBox.classList.add('.newComment');
      commentBox.innerText = newReply; // <p>das</p>
    //   let test = document.querySelector('.contents');
    //   test.appendChild(commentBox);
      document.querySelector('.contents').appendChild(commentBox);
      commentInput.value = '';
    } else{
        alert("값을 입력하세요!");
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

  