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
    buttonTag.onclick = deleteHandler();

    iTag.style.paddingRight = "4.2px";

    //ul tag에 추가(위로 옮겨놨음)
  }
}

//엔터치면서 input값이 지워지도록

// 굳이 deleteHandler함수를 만들어서 여기에서 버튼을 querySelectorAll 선택한 이유?
// 전에처럼 5번줄이나 6번줄에서 선택을하면 코드가 실행되는순간에 있는 버튼들만 가지고오고 그 버튼들만 적용이 되기때문에
// 버튼을 누를때마다 deleteBtns 값을 새로 가지고와야한다.
// 그래서 모든 button 태그에 onclick="deleteHandler()"를 넣어주고
// 그 태그가 클릭되면 아래가 차례대로 실행되도록 한다.

const deleteHandler = () => {
  // 1) 내가 선택한 버튼을 가져와봐 .. 근데, 내가 선택한 버튼이 5번째줄 버튼일수도 있잖아?
  // 그러니까 내가 생성한 모든 버튼을 일단 가져와야겠지
  const deleteBtns = document.querySelectorAll(".deleteBtn");

  //2) 이 많은 삭제버튼중에서, 내가 클릭한 버튼의 li태그만 삭제가 되야되.
  // 근데 몇번째 li인지 내가 알 수가 없잖아?
  // 그렇다면 반복문을 통해서, 내가 클릭한 것에 가까운 li를 지우는 공식을 만들어보자
  // forEach 메서드를 사용해서
  // forEach 메서드는 배열의 요소만큼 반복된다.

  // deleteBtns가 모든 버튼을 가지고온 복수있기때문에 아래처럼 함수를 돌려서 button을 특정한다.
  // deleteBtns의 갯수만큼 forEach 작동

  deleteBtns.forEach((button) => {
    //인자로 받은 button으로 addEvent를 해야지...
    button.addEventListener("click", (e) => {
      // 버튼이 클릭되었을때 클릭된 버튼에서 가장 가까운 li 태그를 찾은 후 지워준다.
      // event에는 많은 정보를 담고 있는데, 그 중에서 taget을 정해서
      e.target.closest("li").remove();
    });
  });
};

function commentEnter(event) {
  if (event.keyCode === 13) {
    commentFunction();
    inputBox.value = "";
  }
}

buttonBox.addEventListener("click", commentFunction);
inputBox.addEventListener("keypress", commentEnter);
