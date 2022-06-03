const commentWriteButton = document.querySelector(".commentWrite__button");
let userId = 0;

const IscommentContents = commentWriteButton.addEventListener("click", () => {
  const commentView = document.querySelector(".comment");

  // 새로운 코멘트 div 생성
  let newCommentDiv = document.createElement("div");
  newCommentDiv.className = "commentView";

  // newCommentDiv
  commentView.appendChild(newCommentDiv);
  // newCommentDiv 안에 append

  AddNewComment();
});

const AddNewComment = () => {
  // 마지막으로 생성된 comment
  const NewcommentView = document.querySelector(".comment").lastElementChild;

  //  댓글 input value 저장
  const commentContentsValue = document.querySelector(".commentContents").value;

  // 댓글 좋아요 저장
  const commentLike = document.querySelector(".commentLike").innerHTML;

  // 클릭할 때마다 유저 아이디 숫자 카운트
  userId++;

  // 새로운 ID생성
  let newCommentId = document.createElement("span");

  //*** innerHTML없이 newCommentId = `user ${userId}`로 하게 되면 span까지 사라진채 text만 할당된다. */
  newCommentId.innerHTML = `appeenndd_${userId}`;
  newCommentId.className = "comment__userId";

  // 새로운 코멘트 내용
  let newCommentContents = document.createElement("span");
  newCommentContents.innerHTML = commentContentsValue;
  newCommentContents.className = "comment_content";

  // 새로운 하트 생성
  let newCommentLike = document.createElement("span");
  newCommentLike.innerHTML = commentLike;
  newCommentLike.className = "commentLike";

  NewcommentView.append(newCommentId);
  NewcommentView.append(newCommentContents);
  NewcommentView.append(newCommentLike);

  CommentInputReset(commentContentsValue);
};
// 댓글 input 내용 삭제 **********  인풋 창 value 갯수
const CommentInputReset = (commentContentsValue) => {
  let commentContents = document.querySelector(".commentContents");

  if (commentContentsValue.length > 0) {
    return (commentContents.value = null);
  }
};
