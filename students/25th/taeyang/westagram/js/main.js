const input = document.getElementsByClassName("comment-text")[0];
const inputTwo = document.getElementsByClassName("comment-text")[1];
const btn = document.getElementsByClassName("btn")[0];
const btnTwo = document.getElementsByClassName("btn")[1];
const comment = document.getElementsByClassName("comment-second")[0]
const commentTwo = document.getElementsByClassName("comment-second")[1]
const emptyComment = document.getElementsByClassName("empty-comment")[0] 
const emptyCommentTwo = document.getElementsByClassName("empty-comment")[1] 


// 첫번째 피드
const onAdd = () => {
  const text = input.value;
    if (input.value ==="") {
      input.focus();
      return
    }

// HTML 요소를 생성해서 클래스 명,속성 넣기
  const commentSecond = document.createElement("div");
  commentSecond.setAttribute("class", "comment-second");
  
  const yous = document.createElement("div");
  yous.setAttribute("class", "yous");
  
  const youName = document.createElement("a");
  youName.setAttribute("class", "you-name");
  youName.setAttribute("href", "#");
  youName.innerHTML = "ty_050";
  
  const commentWrit = document.createElement("span");
  commentWrit.setAttribute("class", "comment-writ");
  commentWrit.innerHTML =" " + text;

  const heartLike = document.createElement("img")
  heartLike.setAttribute("class", "heart-like");
  heartLike.setAttribute("alt", "heart-like");
  heartLike.setAttribute("src", "imgs/heart.png");
  

  //생성한 요소를 묶기
  yous.appendChild(youName);
  yous.appendChild(commentWrit);
  commentSecond.appendChild(yous);
  commentSecond.appendChild(heartLike);
  emptyComment.appendChild(commentSecond)

  // 값이 비어있으면 enter 안쳐지게
  input.value ="";

  //아이디나 비밀번호를 버튼이나 enter 를 쳤을때도 포커스 되게 하기
  input.focus();
};

// 버튼을 클릭했을때 버튼활성화 및 색 변하는 함수 실행
btn.addEventListener('click', () => {
  onAdd();
});

// 아이디나 검색창 Enter 치면 버튼 클릭 구현
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
  return;
})

//두번째 피드 시작
const onAddTwo = () => {
  const text = inputTwo.value;
    if (inputTwo.value ==="") {
      inputTwo.focus();
      return
    }
  
// HTML 요소를 생성해서 클래스 명,속성 넣기
  const commentSecond = document.createElement("div");
  commentSecond.setAttribute("class", "comment-second");
  
  const yous = document.createElement("div");
  yous.setAttribute("class", "yous");
  
  const youName = document.createElement("a");
  youName.setAttribute("class", "you-name");
  youName.setAttribute("href", "#");
  youName.innerHTML = "ty_050";
  
  const commentWrit = document.createElement("span");
  commentWrit.setAttribute("class", "comment-writ");
  commentWrit.innerHTML =" " + text;

  const heartLike = document.createElement("img")
  heartLike.setAttribute("class", "heart-like");
  heartLike.setAttribute("alt", "heart-like");
  heartLike.setAttribute("src", "imgs/heart.png");
  
  //생성한 요소를 묶기
  yous.appendChild(youName);
  yous.appendChild(commentWrit);
  commentSecond.appendChild(yous);
  commentSecond.appendChild(heartLike);
  emptyCommentTwo.appendChild(commentSecond)
  
  // 값이 비어있으면 enter 안쳐지게
  inputTwo.value ="";

  //아이디나 비밀번호를 버튼이나 enter 를 쳤을때도 포커스 되게 하기
  inputTwo.focus();
};

// 버튼을 클릭했을때 버튼활성화 및 색 변하는 함수 실행
btnTwo.addEventListener('click', () => {
  onAddTwo();
});

// 아이디나 검색창 Enter 치면 버튼 클릭 구현
inputTwo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAddTwo();
  }
  return;
})
