//댓글 창에 댓글 쓰고 엔터 혹은 게시 버튼 클릭 시 댓글 추가하는 기능 만들기
// 1. 댓글 창 & 게시 버튼 dom 가져오기
// 2. function에서 if 문 사용? 로그인 javascript랑 유사하게? if 댓글 창에 내용이 있을 때,
// 3. <div> 요소 생성
// 4. 생성된 <div> 요소 안에 댓글 창에 입력된 글(댓글 창.value) innerHTML로 넣기
// 5. 피드 글과 댓글이 달려있는 <div class="fid-comment"> 의 끝으로 생성된 <div>요소 밀어넣기
// 6. 이벤트를 게시 버튼을 눌렀을 때, addEvent 해주기

let CommentBox = document.getElementById("댓글창");
const UploadButton = document.getElementById("게시");
let commentFeed = document.getElementsByClassName("fid-comment")[0];

/*function PutComment() {
  if (CommentBox.value) {
    const UserName = document.createElement("span");
    const uploading = document.createElement("span");
    UploadButton.style.cursor = "pointer";
    uploading.innerHTML = CommentBox.value;
    UserName.innerHTML = "wakgood";
    uploading.classList.add("for-js");
    commentFeed.appendChild(UserName);
    commentFeed.appendChild(uploading);
  }
}

UploadButton.addEventListener("click", PutComment);*/

// 큰 div 하나를 만들고 - 그 안에 댓글 내용과 유저 닉네임을 span 으로 붙여놓자
// 그럼 댓글이 한 줄 한 줄씩 생기겠지..?
// 다 했으면 이제 좋아요 용 하트를 넣자

function Comments() {
  if (CommentBox.value) {
    const ComBox = document.createElement("div");
    const UserName = document.createElement("span");
    const uploading = document.createElement("span");
    const Heart = document.createElement("img");
    UploadButton.style.cursor = "pointer";
    UploadButton.style.color = "blue";
    uploading.innerHTML = CommentBox.value;
    UserName.innerHTML = "wakgood";
    Heart.setAttribute("src", "./image/heart.png");
    UserName.classList.add("bold");
    uploading.classList.add("for-js");
    Heart.classList.add("small-heart");
    commentFeed.appendChild(ComBox);
    ComBox.appendChild(UserName);
    ComBox.appendChild(uploading);
    ComBox.appendChild(Heart);
  }
}

UploadButton.addEventListener("click", Comments);
