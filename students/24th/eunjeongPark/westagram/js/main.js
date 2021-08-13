const button = document.querySelector(".comment-btn");
const commentInput = document.getElementById('comment-input');
let commnetValue = commentInput.value;

function sumbitBtn() {
  const button = document.querySelector(".comment-btn");
  const commentInput = document.getElementById('comment-input');
  let commnetValue = commentInput.value;

  if(commnetValue.length > 0) {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.color = "#1c7ed6";

  }else {
    button.disabled = true;
    button.style.cursor = "default";
    button.style.color = "#3A98F0";
  }
}



 function submitComment() {
    alert('버튼은 눌림')
    const newComment = commentInput.value.trim(); //  댓글 양 끝 공백제거

     // 시간 계산 함수
 function timeForToday(vaue) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
      return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}


    if (newComment.length > 0) {
      const commentContainer = document.querySelector('.art-comment');
      const commentNth = document.createElement('div');
      const userId = document.createElement('span');
      const commentText = document.createElement('span');
      const commentTime = document.createElement('p');

      commentNth.className = "comment-nth"
      userId.className = "user-id"
      commentText.className = "comment-text"
      commentTime.className = "comment-time"

      commentContainer.appendChild(commentNth);
      commentContainer.appendChild(userId);
      commentContainer.appendChild(commentText);
      commentContainer.appendChild(commentTime);

      commentText.innerText = newComment;
      userId.innerText = 'chunSig ';
   }
 }



 commentInput.addEventListener('keyup', sumbitBtn);
 button.addEventListener('click', submitComment);