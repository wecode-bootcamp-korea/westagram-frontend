{
  /* <div class="feed_comment_input">
<input id="input_comment" type="text" placeholder="댓글 달기..." />
<div id="button_comment">게시</div>
</div> */
}

// keydown Enter or 게시 btn click

{
  /* <div class="comment">
              <div class="comment_upper">
                <div class="comment_content">
                  <span>happy_sung</span>
                  <span>~~~~~~~~</span>
                </div>
                <div class="comment_like_icon">
                  <img
                    alt="하트"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
              <div class="comment_bottom">42분전</div>
            </div> */
}

const input_element = document.getElementById("input_comment");
const btn_element = document.getElementById("button_comment");
const comment_element = document.querySelector(".feed_comment");
console.log(comment_element);
console.log(btn_element);

input_element.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const p = document.createElement("div");
    p.setAttribute("class", "comment");

    p.innerText = input_element.value;
    comment_element.appendChild(p);
  }
});

btn_element.addEventListener("click", function (e) {
  const p = document.createElement("div");
  p.setAttribute("class", "comment");

  p.innerText = input_element.value;
  comment_element.appendChild(p);
});
