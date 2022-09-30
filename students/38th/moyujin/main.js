//  글자 입력 시 색 진하기 변경
let thisIsComment = document.getElementsByClassName(
  "feed_comments_write_box"
)[0];
let commentInput = document.querySelector(".comment_upload");

thisIsComment.addEventListener("keyup", function (e) {
  console.log(e.target);
  if (thisIsComment.value !== "") {
    commentInput.style.opacity = "1";
  } else {
    commentInput.style.opacity = "0.5";
  }
});

// 제출 버튼 클릭 시 올리기

let commentBox = document.getElementsByClassName("feed_comments_write_box")[0];
let submitBtn = document.getElementsByClassName("comment_upload")[0];

function submit() {
  const box = document.getElementsByClassName("comment_result")[0];
  const inputCommnet = document.createElement("div");
  const userName = document.createElement("span");
  const inputText = document.createElement("p");
  const likeIcon = document.createElement("img");

  inputCommnet.classList.add("comment_box");
  userName.classList.add("userName");
  mainText.classList.add("feed_comment_example");
  mainIcon.classList.add("comment_icon_like");

  mainIcon.setAttribute("src", "image/heart.png");

  userName.innerHTML = "yuzinnee";
  inputText.innerHTML = commentBox.value;

  inputCommnet.appendChild(userName);
  inputCommnet.appendChild(inputText);
  inputCommnet.appendChild(likeIcon);

  box.appendChild(inputCommnet);
}

submitBtn.addEventListener("click", (event) => {
  submit();
  console.log(commentBox.value());
  commentBox.value = "";
});

box.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    submit();
    commentBox.value = "";
  }
});

// 함수에서 사용할 것들을 위에 변수를 선언해주는 것이 약속
// [0]을 안써줘서 오류가 났었음
