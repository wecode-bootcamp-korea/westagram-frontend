// 댓글 input창에 엔터치거나 '게시'누르면 댓글이 추가되도록 createElment로
// 요소 생성해서, input에 입력한 값이 추가되도록 구현하기.

const commentInput = document.querySelector('#comment'); // 댓글 input
const commentBtn = document.querySelector('#comment__btn'); // 버튼태그

commentInput.addEventListener('keyup', uploadComment);

function uploadComment(e) { // key를 눌렀다 떼면 함수 실행
  if(e.keyCode === 13){ // 엔터키를 누르면
    let comment = document.getElementsByClassName("main__userpost--comment");
    let makeDiv = document.createElement('div'); // 댓글 전체 감싸는 wrap
    let makeUser = document.createElement('span'); // 댓글 단 아이디 wrap
    let makeMsg = document.createElement('span');  // 댓글 내용 wrap
    let makeBtn = document.createElement('BUTTON'); // 댓글 버튼

    // 클래스명 부여
    makeDiv.className = "comment__div"; // 'makeDiv'의 클래스명 할당
    makeUser.className = "comment__user";
    makeMsg.className = "comment__msg";
    makeBtn.className = "comment__btn";

    makeMsg.innerHTML = commentInput.value;
    makeUser.innerHTML = "im_dally"; // 아이디명 할당
    makeBtn.innerHTML = "삭제"; // 삭제버튼

    comment.appendChild(makeDiv); // 댓글 전체를 감싸는 comment에 댓글 하나의 div 자식 태그 넣기
    comment.appendChild(makeUser); // comment에 아이디의 span 태그 넣기
    comment.appendChild(makeMsg); // comment에 댓글 내용 span 태그 넣기
    comment.appendChild(makeBtn); // comment에 삭제 버튼 넣기

    // 삭제버튼 누르면 이벤트 발생
    makeBtn.addEventListener('click', (event) => {
      const btn = event.target;
      console.log(btn);

      const deleteAll = btn.parentNode;

      comment.removeChild(deleteAll);
    })
  }
}