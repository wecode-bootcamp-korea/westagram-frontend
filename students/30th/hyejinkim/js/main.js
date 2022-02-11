// 필요한 태그 만들기
const commentInput = document.querySelector("#comment");
const commentBtn = document.querySelector("#commentBtn");
const commentPrintDiv = document.querySelector(".comment-print");
const postLikeBtn = document.querySelector(".postLikeBtn");
const commentLikeBtns = document.getElementsByClassName("commentLikeBtn");

// 댓글 기능 - 함수 2개
function commentPrint(e) {
  if (commentInput.value) {
    if (e.key === "Enter") {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment-one");
      commentDiv.innerHTML = `<p><b class="commentUser">test01</b>${commentInput.value}</p><div class="commentLikeBtn commentLikeBtn-white" onclick="commentLike(event)"></div>`;
      commentPrintDiv.append(commentDiv);
      commentInput.value = "";
      console.log(document.querySelector(".profile-bottom"));
    } else {
      return;
    }
  }
}
function commentPrintClick() {
  if (commentInput.value) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-one");
    commentDiv.innerHTML = `<p><b class="commentUser">test01</b>${commentInput.value}</p><div class="commentLikeBtn commentLikeBtn-white" onclick="commentLike(event)"></div>`;
    commentPrintDiv.append(commentDiv);
    commentInput.value = "";
  } else {
    return;
  }
}
commentInput.addEventListener("keypress", commentPrint);
commentBtn.addEventListener("click", commentPrintClick);

// 포스트 좋아요
function postLike(e) {
  if (e.target.classList.contains("postLikeBtn-white")) {
    e.target.classList.remove("postLikeBtn-white");
    e.target.classList.add("postLikeBtn-color");
  } else if (e.target.classList.contains("postLikeBtn-color")) {
    e.target.classList.remove("postLikeBtn-color");
    e.target.classList.add("postLikeBtn-white");
  }
}

// 댓글 좋아요
function commentLike(e) {
  if (e.target.classList.contains("commentLikeBtn-white")) {
    e.target.classList.remove("commentLikeBtn-white");
    e.target.classList.add("commentLikeBtn-color");
  } else if (e.target.classList.contains("commentLikeBtn-color")) {
    e.target.classList.remove("commentLikeBtn-color");
    e.target.classList.add("commentLikeBtn-white");
  }
}

// 말 줄임 : 포스트 내용, 프로필 하단글
function shrinkContent() {
  const length = 20;
  const profileBottoms = document.getElementsByClassName("profile-bottom");
  const postContents = document.getElementsByClassName("postContent");

  for (bottom of profileBottoms) {
    let str = bottom.innerText;
    if (str.length > length) {
      str = str.substr(0, length - 2) + "..";
      bottom.innerText = str;
    }
  }
  for (post of postContents) {
    let str = post.innerText;
    if (str.length > length) {
      str = str.substr(0, length - 2) + "..";
      post.innerHTML = `${str} <b class="morePost">더 보기</b>`;
    }
  }
}
window.addEventListener("load", shrinkContent);

/* wrap-up */
/* 
  댓글 등록
  - init에서는 check부터 먼저 한다
  - check : input의 value가 있을 때 -> 등록 함수를 호출한다
  - class 주기 : className = "name new" 공백으로 구분해서 여러 클래스 추가 가능
  - 삭제 버튼 : <span> x </span> 넣기
  - 요소 다 만들고 -> 내용 appendChild -> 이벤트 등록 -> 댓글 appendChild

  
  - value : 단순히 게시 버튼을 눌렀을 때 input value
  - input.value : input 태그에서 갖고 있는 input value
  --> value은 그냥 값만 갖고 있는 변수일 뿐이고
  input.value는 태그 자체를 건드리는 것이다.
  
  DOM : Document Object Model
  - 요소가 모두 객체화 되어서, . 점 찍어서 접근 가능하다

  해볼 것
  --> 댓글 등록 함수 구분하기
      1) input 값 체크 -> 등록 호출
      2) 댓글 등록 
      3) 이벤트 등록 : 삭제 버튼
  --> onclick 달아주는 것 보다 이벤트 등록해주는 함수를 따로 만들어줘도 되는구만..
  
  */

/* 질문 모음*/
/* 1. 호출할 때 commentPrint(e)라고 하면 실행 안되는 이유??
함수에 default e가 넘겨져서 쓸 필요 없음
콘솔로 찍어보기
fucntion commentPrint(event) {
  commentPrint(e);
} */
