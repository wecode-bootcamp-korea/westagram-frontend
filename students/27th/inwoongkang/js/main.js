const postBox = document.querySelector(".postBox");
const commentBox = document.querySelector(".commentBox");
const inputvalue = document.querySelector(".input-Box");
const postButton = document.querySelector(".post");
let divBox = [];
let number = 0;
/*
11/10
display hidden 속성 class를 가진 글삭제 span태그 동적으로 생성
마우스 오버시 글삭제 버튼 노출
글삭제 버튼 누를 시 해당 이벤트 태그의 조상태그에서 부모태그 remove
*/

function heart(event) {
  if (event.target.classList[2] === "heart") {
    //타겟의 클래스 리스트 2번쨰 인덱스 값이 Heart면 빨갛게 채워주고 빨갛다면 하얗게 만들어 줌
    event.target.setAttribute("class", "fas fa-heart fullHeart"); // setAttribute속성을 추가하는 것이 아니라 재할당 시킴
  } else if (event.target.classList[2] === "fullHeart") {
    event.target.setAttribute("class", "far fa-heart  heart");
    console.log(event.target.classList);
  }
  //   const heartParent = event.target.parentNode;
  //   const a = document.getElementById(heartParent.id);
  //   console.log(a);
  //   console.log(commentBox);
  //   commentBox.removeChild(a);
  //   commentBox.remove(a); //조상노드에서 이벤트타겟아이디랑 일치하는 부모요소 제거
}

function doDelete(event) {
  let buttonWrapper = event.target.parentNode;
  commentBox.removeChild(buttonWrapper);
}
function init() {
  inputvalue.addEventListener("keyup", () => {
    if (inputvalue.value.length > 0) {
      postButton.disabled = false;
      postButton.style.cursor = "pointer";
      postButton.style.color = "royalblue";
    } else if (inputvalue.value.length === 0) {
      postButton.disabled = true;
      postButton.style.cursor = "default";
      postButton.style.color = "rgba(66, 66, 243, 0.548)";
    }
  });
  postBox.addEventListener("click", () => {
    let profileName = document.createElement("span");
    let comment = document.createElement("span");
    let heartIcon = document.createElement("span");
    let deleteButton = document.createElement("button");
    divBox[number] = document.createElement("div");
    divBox[number].className = "comment";
    divBox[number].id = number;
    commentBox.appendChild(divBox[number]);
    profileName.classList.add("likeComment", "bold", "commentAdd");
    comment.classList.add("likeComment", "dot");
    deleteButton.classList.add("deleteBut");
    divBox[number].appendChild(profileName).textContent = "cannon_mj";
    divBox[number].appendChild(comment).textContent = inputvalue.value;
    divBox[number]
      .appendChild(heartIcon)
      .setAttribute("class", "far fa-heart heart");
    divBox[number].appendChild(deleteButton).textContent = "댓글 삭제";
    heartIcon.addEventListener("click", heart); // 동적으로 생성된 태그 변수 클릭할 시 heart 함수 호출  하지만 실행 로직 이해가 x
    deleteButton.addEventListener("click", doDelete);
    inputvalue.value = "";
    number++;
  });

  inputvalue.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && inputvalue.value.length > 0) {
      let profileName = document.createElement("span");
      let comment = document.createElement("span");
      let heartIcon = document.createElement("span");
      let deleteButton = document.createElement("button");
      divBox[number] = document.createElement("div");
      divBox[number].className = "comment";
      divBox[number].id = number;
      commentBox.appendChild(divBox[number]);
      profileName.classList.add("likeComment", "bold", "commentAdd");
      comment.classList.add("likeComment", "dot");
      deleteButton.classList.add("deleteBut");
      divBox[number].appendChild(profileName).textContent = "cannon_mj";
      divBox[number].appendChild(comment).textContent = inputvalue.value;
      divBox[number]
        .appendChild(heartIcon)
        .setAttribute("class", "far fa-heart heart");
      divBox[number].appendChild(deleteButton).textContent = "댓글 삭제";
      heartIcon.addEventListener("click", heart); // 동적으로 생성된 태그 변수 클릭할 시 heart 함수 호출  하지만 실행 로직 이해가 x
      deleteButton.addEventListener("click", doDelete);
      inputvalue.value = "";
      number++;
    }
  });
}

init();
