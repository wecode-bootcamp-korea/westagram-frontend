//  글자 입력 시 색 진하기 변경
let thisIsComment = document.getElementsByClassName(
  "feed_comments_write_box"
)[0];
let commentInput = document.querySelector(".comment_upload");

thisIsComment.addEventListener("keyup", function (e) {
  if (thisIsComment.value !== "") {
    commentInput.style.opacity = "1";
  } else {
    commentInput.style.opacity = "0.5";
  }
});

// 제출 버튼 클릭 시 올리기

let commentBox = document.getElementsByClassName("feed_comments_write_box")[0];
let submitBtn = document.getElementsByClassName("comment_upload")[0];
const box = document.getElementsByClassName("comment_result")[0];

function submit() {
  const inputCommnet = document.createElement("div");
  const userName = document.createElement("span");
  const inputText = document.createElement("p");
  const likeIcon = document.createElement("img");
  const commentLeft = document.createElement("div");
  const commentRight = document.createElement("div");

  inputCommnet.classList.add("comment_box");
  userName.classList.add("user_name");
  inputText.classList.add("feed_comment_content");
  commentLeft.classList.add("comment_box_left");
  commentRight.classList.add("comment_box_right");
  likeIcon.classList.add("comment_icon_like");

  likeIcon.setAttribute("src", "image/heart.png");

  userName.innerHTML = "yuzinnee";
  inputText.innerHTML = commentBox.value;

  commentLeft.appendChild(userName);
  commentLeft.appendChild(inputText);
  commentRight.appendChild(likeIcon);
  inputCommnet.appendChild(commentLeft);
  inputCommnet.appendChild(commentRight);

  box.appendChild(inputCommnet);
}

submitBtn.addEventListener("click", (event) => {
  if (commentBox.value !== "") {
    submit();
    commentBox.value = "";
  }
});

commentBox.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    if (commentBox.value !== "") {
      submit();
      commentBox.value = "";
    }
  }
});

// 함수에서 사용할 것들을 위에 변수를 선언해주는 것이 약속
// [0]을 안써줘서 오류가 났었음
