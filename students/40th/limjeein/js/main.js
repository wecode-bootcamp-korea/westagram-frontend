let writedComment = document.querySelector(".commentPush");
const addComment = document.querySelector(".submitPush");
const addFollowes = document.querySelector(".followersWrite");
const userWrite = document.querySelector(".userWrite");

const countLike = document.querySelector(".userLike");

let valueArray = [];

// submit 버튼 활성화 시 동작
function submitBtn(inputResult) {
  // enter 쳤을때 동작
  if (window.event.keyCode == 13) {
    let userCreateTag = document.createElement("div");

    writedComment.appendChild(userCreateTag);

    //span 태그에 사용자 입력값 text로 할당
    userCreateTag.innerText = inputResult;
    // div 태그 아래 appendChild로 span 넣어주기
    userWrite.appendChild(userCreateTag);

    inputResult.value = "";

    // 배열에 사용자 입력값 추가
    valueArray.push(inputResult);
    console.log(valueArray);
  }
}

//댓글 담기 동작
writedComment.addEventListener("keyup", function () {
  let inputResult = writedComment.value;
  submitBtn(inputResult);
});

// 하트 좋아요 횟수

let count = 0;
let nameAdd = document.querySelector(".name");

function addLikeCount() {
  count += 1;
  nameAdd.innerText = `${count}`;
}

countLike.addEventListener("click", addLikeCount);
