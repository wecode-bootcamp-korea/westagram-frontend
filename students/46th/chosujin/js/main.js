//결과: 댓글을 쳤을 때, ul태그 밑에 새로운 li태그가 삽입되는것
//1) 내가 input창에 친 값을 가져와야되.
const buttonBox = document.querySelector(".commentBt");
const inputBox = document.querySelector("#comment");

function commentFunction() {
  //클릭했을 때, 태그생성
  const inputValue = inputBox.value;
  const ulTag = document.querySelector("ul");
  const liTag = document.createElement("li");
  const divTag = document.createElement("div");
  const spanTag = document.createElement("span");
  const spanTagTwo = document.createElement("span");

  const divTagTwo = document.createElement("div");
  const iTag = document.createElement("i");
  const buttonTag = document.createElement("button");

  if (inputBox.value !== "") {
    inputBox.value = "";

    //태그 삽입
    ulTag.appendChild(liTag);
    liTag.appendChild(divTag);
    divTag.appendChild(spanTag);
    divTag.appendChild(spanTagTwo);

    liTag.appendChild(divTagTwo);
    divTagTwo.appendChild(iTag);
    divTagTwo.appendChild(buttonTag);

    //태그 값 추가
    spanTag.innerText = "BTS_Sugar ";
    spanTagTwo.innerText = inputValue;
    buttonTag.innerText = "삭제";

    //태크 속성 추가
    liTag.className = "commentList";
    spanTag.className = "id";
    divTagTwo.className = "commentListRight";
    iTag.className = "fa-regular fa-heart";
    buttonTag.className = "deleteBtn";
    buttonTag.onclick = function () {
      deleteHandler(this);
    };
    iTag.onclick = function () {
      likeRed(this);
    };
    iTag.style.paddingRight = "4.2px";

    //ul tag에 추가(위로 옮겨놨음)
  }
}

//엔터치면서 input값이지워지도록
//onclick="likeRed(this)"
//클릭을 했을 때, likRed라는 함수가 호출된다.
//그리고 인자는 this다. this는 호출한 i 자신이 된다.
//iTag에 속성을 추가하는데,
//iTag.onclick = function () {
//likeRed(this);}
//왜 한번 더 함수로 감싸서 했을까?
//this의 위치가 달라지기 때문에
//button 인자 즉, 내가 누른 i태그에 가까운 상위 li태그를 제거하게 된다.

//

const deleteHandler = (button) => {
  button.closest("li").remove();
};

// 좋아요 누르면 색깔변하게 만들기
// 1) 좋아요버튼을 먼저 가져와야지
// 2) 좋아요버튼을 모두 가져온 다음에
// 3) 내가 선택한 좋아요 버튼의 색깔이 red로 바뀌게 해보자

const likeRed = (button) => {
  if (button.className === "fa-regular fa-heart") {
    button.className = "fa-solid fa-heart";
    button.style.color = "red";
  } else {
    button.className = "fa-regular fa-heart";
    button.style.color = "black";
  }
};

function commentEnter(event) {
  if (event.keyCode === 13) {
    commentFunction();
    inputBox.value = "";
  }
}

buttonBox.addEventListener("click", commentFunction);
inputBox.addEventListener("keypress", commentEnter);
