"use strict";

// 1. textarea에 작성한 value를 받는다 -> 게시 버튼을 누르면 (event) -> 그 값을 받아서 dom으로 html 안에 추가한다 (event)
// 4. 검색의 value를 받는다 -> value의 첫 값에 따라 검색의 data 입력값 순서와 동일하게 뜬다 (event)
// 5. nav의 프로필 사진을 누른다ㅏ -> 메뉴박스 나온다 (event)
// 6. 바깥 영역 클릭된다 -> 메뉴 닫힌다 (event)

(function () {
  const commentBtn = document.querySelector(".comment_posting");
  // 시용자가 입력한 텍스트 구역 textarea 지목하기
  const textArea = document.querySelector("#textarea");

  function validateComment() {
    // textarea의 value 가져오기
    let textValue = textArea.value;

    // 댓글이 추가되어야 하는 자리 가져오기
    const commentArea = document.querySelector(".feed_comment");

    // 새로운 댓글 자리를 생성해주기
    const newComment = document.createElement("li");

    newComment.innerHTML = `
  <div>
    <a href="#"><span class="feed_id_name">chobo_coding</span></a>
    &nbsp;
    <span class="feed_id_text">${textValue}<br /></span>
  </div>
  <button type="button" class = "liked"><i class="far fa-heart like_heart"></i></button>`;

    // 새로 생긴 댓글이 추가되어야 하는 자리에 append 해주기
    // appendChild (괄호안이, 자식으로 추가되는 부분)
    commentArea.appendChild(newComment);
    textArea.value = "";

    // let a = document.querySelector(".liked");
    // // console.log(a);
    // a.addEventListener("click", () => {
    //   a.style.color = "rgb(245, 0, 94)";
    //   console.log(a);
    // });

    commentBtn.style.color = "rgb(55, 55, 55)";
    commentBtn.style.fontWeight = "normal";
    commentBtn.style.cursor = "inherit";
  }

  function enabledBtn() {
    commentBtn.style.color = "rgb(0, 147, 245)";
    commentBtn.style.fontWeight = "bold";
    commentBtn.style.cursor = "pointer";
    commentBtn.disabled = false;
  }
  commentBtn.addEventListener("keyup", (event) => {
    if (event.key === "enter") {
      validateComment();
    }
  });
  commentBtn.addEventListener("click", validateComment);
  textArea.addEventListener("input", enabledBtn);

  // 2. 하트 누르면 -> 하트의 style 바뀐다 (event) -> 버튼의 스타일
  const clickHeart = document.querySelector(".like_heart");

  clickHeart.addEventListener("click", () => {
    clickHeart.classList.toggle("clicked_like");
  });

  // 3. 검색창 누른다 -> 검색창이 뜬다 (event)
})();
