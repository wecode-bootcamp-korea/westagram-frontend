// 입력한 내용이 없을 때 alert창
// makeDeleteEvent - 댓글삭제 / 버튼을 눌렀을때 newcomment 를 없애버리는 동작.
// 템플릿 literal 방식 : 백틱을 활용 ---> innerHTML

const input_element = document.getElementById("input_comment");
const btn_element = document.getElementById("button_comment");
const comment_element = document.querySelector(".feed_comment");

function submit_comment(value) {
  const newComment = document.createElement("div");
  const commentUser = "sunyoung";
  newComment.innerHTML = `<div class="comment">
            <div class="comment_upper">
              <div class="comment_content">
                <span id="userNickname" class="user_id">${commentUser}</span>
                <span id="feed_comment" class="text"
                  >${value}</span>
              </div>
              <div class="comment_like_icon">
                <img
                  alt="하트"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
                <img id="deleteBtn" alt="삭제" src="img/trash.png" />
              </div>
            </div>
            <div class="comment_bottom">42분전</div>
          </div>`;

  comment_element.appendChild(newComment);
  input_element.value = "";

  //댓글 삭제 기능 구현

  const delete_button = newComment.querySelector("#deleteBtn");

  delete_button.addEventListener("click", function () {
    comment_element.removeChild(newComment);
  });
}

input_element.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && input_element.value.length > 0) {
    return submit_comment(input_element.value);
  }
});

btn_element.addEventListener("click", function () {
  if (input_element.value.length > 0) {
    return submit_comment(input_element.value);
  }
});
