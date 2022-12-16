const textBox = document.querySelector(".inputBox"); //input 변수 할당
const ButtonClick = document.querySelector(".buttonBox"); //버튼 변수 할당
const feedComment = document.querySelector(".new_comments"); // 새로운 댓글이 달릴 div 할당
const profileId1 = document.querySelector(".my_profile_id"); // 이름 할당

// 게시 버튼 눌렀을때 댓글 기능 추가
ButtonClick.addEventListener("click", clickButton);

function clickButton() {
  const commentBox = document.createElement("span");
  const profileId = document.createElement("span");
  const br = document.createElement("br");
  commentBox.className = "newCommentBox";
  commentBox.innerHTML = textBox.value;
  profileId.className = "newCommentBox1";
  profileId.innerHTML = "cccodus313";

  if (textBox.value !== "" && textBox.value.trim() !== "") {
    feedComment.appendChild(profileId) +
      feedComment.appendChild(commentBox) +
      feedComment.appendChild(br);
    textBox.value = null;
  }
}

// 엔터 쳤을때 댓글 기능 추가
textBox.addEventListener("keypress", enter);

function enter(e) {
  const commentBox = document.createElement("span");
  const profileId1 = document.createElement("span");
  const br = document.createElement("br");
  const profileId = document.querySelector(".my_profile_id");
  const textBoxTrim = textBox.value.trim();
  profileId1.className = "newCommentBox1";
  commentBox.className = "newCommentBox";
  profileId1.innerHTML = "cccodus313";
  commentBox.innerHTML = textBox.value;

  if (
    textBox.value !== "" &&
    textBox.value.trim() !== "" &&
    e.key === "Enter"
  ) {
    feedComment.appendChild(profileId1) +
      feedComment.appendChild(commentBox) +
      feedComment.appendChild(br);
    textBox.value = null;
  }
}

//글자 타이핑 했을때 '게시' 색깔 바뀌는 기능 
textBox.addEventListener("keydown", colorChange);

function colorChange() {
  if (textBox.value !== "" && textBox.value.trim() !== "") {
    ButtonClick.style.color = "#0095F5";
  } else if (textBox.value == "") {
    return (ButtonClick.style.color = "#C0E0FD");
  }
}