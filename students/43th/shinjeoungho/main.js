const commentSection = document.querySelector(".commentSection");
const postingButton = document.getElementById("postingBtn");
const storyArea = document.querySelector(".story");
const suggestionArea = document.querySelector(".recommendation");
const commentArea = document.getElementById("comment");
const newMenu = document.getElementById("new_menu");
const menuBox = document.querySelector(".menu_box");
const searchArea = document.querySelector(".search");
const searchIcon = document.querySelector(".bi-search");
const commentContent = document.getElementById("comment_content");

let saveComment = [];
let numberComments = 0;
let like = 0;

// 검색 구역에 포커스 시 검색 아이콘 없어지게 하는 코드
searchArea.addEventListener("focusin", () => {
  searchIcon.style.display = "none";
});
searchArea.addEventListener("focusout", () => {
  searchIcon.style.display = "block";
  searchArea.value = "";
});

// 사용자 아이콘을 누르면 간이 메뉴가 나오게 하는 코드
newMenu.addEventListener("click", () => {
  menuBox.classList.toggle("clicked");
});

//댓글에 값을 입력하고 엔터를 치면 댓글이 화면에 나오게 하는 코드
comment.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (commentArea.value.length > 0) {
      commentInformation();
      commentArea.value = "";
    }
  }
});

// 게시버튼을 누르면 댓글이 화면에 나오게 하는 코드
postingButton.addEventListener("click", () => {
  if (commentArea.value.length > 0) {
    commentInformation();
    commentArea.value = "";
  }
});
// 댓글 객체 정보 생성 및 저장 하여 댓글 구역을 나타낼 수 있게 준비해주는 코드
const commentInformation = () => {
  let input = {
    id: random(),
    value: commentArea.value,
    up: false,
  };
  saveComment.push(input);
  commentsRender();
};

//댓글 입력시 조건에 맞게 화면에 나타내주는(그려주는) 코드
const commentsRender = () => {
  if (numberComments < 0) {
    numberComments = 0;
  }
  let result = ``;
  saveComment.forEach((item) => {
    if (!item.up) {
      result += `
  <div class="contents" >
    <p><strong>${item.id}</strong> ${item.value}</p> 
    <div>
      <button  onclick="itSoundsGood('${item.id}')"><i class="bi bi-hand-thumbs-up-fill"></i></button>
      <button onclick="deleteComment('${item.id}')"><i class="bi bi-trash3"></i></button>
    </div>
  </div>`;
    } else {
      result += `
    <div class="contents" >
      <p><strong>${item.id}</strong> ${item.value}</p> 
      <div>
        <button class="upThumbs" onclick="itSoundsGood('${item.id}')"><i class="bi bi-hand-thumbs-up-fill"></i></button>
        <button onclick="deleteComment('${item.id}')"><i class="bi bi-trash3"></i></button>
      </div>
    </div>`;
    }
    commentSection.innerHTML = `<img src="./image/KakaoTalk_20230213_204309040.jpg" alt="">
    <p><strong>${item.id}</strong>님 외&nbsp<strong>${numberComments}명</strong>이 댓글을 다셨습니다.</p>`;
  });
  numberComments++;
  commentContent.innerHTML = result;
  storyRender();
  recommendationRender();
};

// 댓글을 삭제하는 코드
const deleteComment = (id) => {
  for (let i = 0; i < saveComment.length; i++) {
    if (saveComment[i].id == id) {
      saveComment.splice(i, 1);
      commentSection.innerHTML = "";
    }
  }
  numberComments -= 2;
  commentsRender();
  itSoundsGood(id);
};

// 댓글에 좋아요를 눌렀을떄 +1(바탕:노랑색)이 되고 다시 한번 눌렀을때 -1(바탕:검은색)이 되는 코드
const itSoundsGood = (id) => {
  if (like <= 0) {
    like = 0;
  }
  saveComment.forEach((item) => {
    if (item.id == id && !item.up) {
      item.up = !item.up;
      like++;
    } else if (item.id == id && item.up) {
      item.up = !item.up;
      like--;
    }
  });
  document.querySelector(".hearts").innerHTML = `좋아요 ${like}개`;
  numberComments--;
  commentsRender();
};

// 스토리 구역에 사용자 아이디를 나타내주는 코드
const storyRender = () => {
  let result2 = ` <div class="story_header">
                    <p>스토리</p>
                    <strong>모두 보기</strong>
                  </div>`;
  saveComment.forEach((item) => {
    result2 += `
    <div class="suggestion">
      <i class="bi bi-person-square"></i>
      <p>${item.id}</p>
    </div>`;
  });
  storyArea.innerHTML = result2;
};
// 추천 구역에 사용자 아이디를 나타내주는 코드
const recommendationRender = () => {
  let result3 = `<div class="story_header">
                  <p>회원님을 위한 추천</p>
                  <strong>모두 보기</strong>
                </div>`;
  saveComment.forEach((item) => {
    result3 += `
    <div class="suggestion">
      <i class="bi bi-person-square"></i>
      <p>${item.id}</p>
    </div>`;
  });
  suggestionArea.innerHTML = result3;
};
// 댓글의 id를 무작위로 지정해주는 코드
const random = () => {
  return Math.random().toString(36).substr(2, 16);
};
