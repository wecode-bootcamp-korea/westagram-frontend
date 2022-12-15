const commentAddBox = document.getElementById("add_comment");
const addBtn = document.getElementById("add_btn");

const commentBox = document.getElementById("comment_wrap");
const commentInput = document.getElementById("comment_input");

function addComment() {
  const text = commentInput.value; //input값을 text라는 변수에 담음

  const heart = document.createElement("span");
  const removeBtn = document.createElement("span"); //removeBtn을 span tag를 사용해서 li tag에 추가
  const item = document.createElement("li"); //li를 생성해서 댓글이 달릴 자리를 마련
  const nickName = document.createElement("span"); //nickName과 textBox를 span tag를 사용해서 li tag에 추가
  const textBox = document.createElement("span");

  removeBtn.innerHTML = "삭제"; //removeBtn의 innerHTML을 "삭제"로 입력
  textBox.innerText = text; //textBox의 값에 item을 넣어 input.value가 담길 수 있게 함.
  nickName.innerText = "happy"; //닉네임은 우선 고정적으로 지정

  heart.setAttribute("class", "empty_heart");
  nickName.setAttribute("class", "nickname"); //닉네임에 클래스와 클래스명을 지정해서 css를 설정할 수 있게 함.
  removeBtn.setAttribute("class", "remove_btn");

  item.appendChild(heart);
  item.appendChild(nickName);
  item.appendChild(textBox);
  item.appendChild(removeBtn);

  commentBox.appendChild(item);
  //commentBox.appendChild(item).appendChild(nickName).appendChild(textBox); -> item 아래 nickname 아래 textBox

  commentInput.value = ""; //댓글이 달린 후 input의 값이 빈칸이 될 수 있게 함
  commentInput.focus(); //댓글이 달린 후 다시 Input에 focus 될 수 있게 함

  //버튼 클릭시 댓글 삭제 함수
  removeBtn.addEventListener("click", () => {
    commentBox.removeChild(item);
  });

  //댓글 좋아요
  heart.addEventListener("click", () => {
    heart.classList.toggle("full_heart");
  });
}

//게시버튼 활성화 함수
function addActive() {
  commentInput.value !== ""
    ? addBtn.classList.remove("blur")
    : addBtn.classList.add("blur");
}

//엔터키 업되면 댓글 업로드
commentInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addComment();
  }
  addActive();
  return;
});

//버튼 클릭시 댓글 업로드 함수
addBtn.addEventListener("click", () => {
  addComment();
});
