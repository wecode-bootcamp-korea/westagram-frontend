const search = document.querySelector(".navSearch-input");
const searchP = search.placeholder;

// Navbar의 검색창을 클릭시 돋보기모양 background-iamge가 사라지며 placeholder의 text가 왼쪽으로 이동한다
// 때문에 background-image: none과 동시에 input:placeholder 셀렉터로 padding-left 값을 주는 클래스를 추가하였다.
search.addEventListener("focus", () => {
  search.classList.add("placeHolderStyle");
});

// 검색창 바깥을 클릭하면 다시 되돌아가는 코드
search.addEventListener("blur", () => {
  search.classList.remove("placeHolderStyle");
  if (search.value !== "") search.style.paddingLeft = "50px";
});

const heart = document.querySelector(".fa-heart");

// 좋아요 유무를 판별하는 변수
let heartVal = 0;

// 아이콘은 FontAwesome에서 제공하는 아이콘을 사용하였기 때문에 i태그로 구현되어있다.
// 때문에 color 속성값으로 색을 변경할 수 있다.
// 하트 아이콘을 누르면 FontAwesome에서 제공하는 클래스를 변경하여 regular > solid로 하트를 변경
// 동시에 color: red 속성을 가진 클래스를 추가하여 좋아요 클릭 이벤트를 구현.
// 변수값 판별을 통한 삼항 연산자로 if - if else문 구현 없이 좋아요 , 좋아요취소를 자유롭게 변경가능.
heart.addEventListener("click", () => {
  heartVal === 0
    ? (heartVal++,
      heart.classList.remove("fa-regular"),
      heart.classList.add("fa-solid"),
      (heart.style.color = "red"),
      (document.querySelector(".feedLike").innerHTML = "좋아요 1,898개"))
    : (heartVal--,
      heart.classList.remove("fa-solid"),
      heart.classList.add("fa-regular"),
      (heart.style.color = "black"),
      (document.querySelector(".feedLike").innerHTML = "좋아요 1,897개"));
});

const commentInput = document.querySelector("#feedAddCommentInput");
const commentButton = document.querySelector("#feedAddCommentButton");

// 댓글 추가 Input 창에서 댓글 내용이 비어있으면 게시 버튼을 활성화 할 수 없도록 검증.
window.addEventListener("keyup", () => {
  commentInput.value !== ""
    ? ((commentButton.disabled = false),
      (commentButton.style.color = "rgb(0,149,246)"))
    : ((commentButton.disabled = true),
      (commentButton.style.color = "rgb(175, 210, 234)"));
});

const feedCommetns = document.querySelector(".feedComments");

// 댓글 게시 버튼을 누르면 Input창에 입력한 Value를 받아서 createElement로 생성된 div의 innerHTML 값으로 사용.
// 백틱을 이용해서 댓글 게시자의 아이디도 같이 출력.
// 댓글을 게시하면 Input의 Value를 초기화.
commentButton.addEventListener("click", () => {
  let newComment = document.createElement("div");
  newComment.innerHTML = `<span>me</span>${commentInput.value}`;
  newComment.className = "comment";
  feedCommetns.appendChild(newComment);
  commentInput.value = "";
});

// 댓글 게시 기능을 keydown이벤트와 e.key를 통해서 입력한 키의 값이 "Enter"라면 댓글을 게시
// 중복 게시를 예방하기 위해서 Input창의 Value가 공란인지 검증하는 코드 추가.
commentInput.addEventListener("keydown", (e) => {
  let newComment = document.createElement("div");
  console.log(e.key);
  if (e.key == "Enter" && commentInput.value.length > 1) {
    newComment.innerHTML = `<span>me</span>${commentInput.value}`;
    newComment.className = "comment";
    feedCommetns.appendChild(newComment);
    commentInput.value = "";
  }
});
