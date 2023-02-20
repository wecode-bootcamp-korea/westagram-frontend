/***** 댓글 등록 *****/
const commentForm = document.querySelector(".form_comment");
const commentGroup = document.querySelector(".group_comment");
const commentGroupChild = commentGroup.getElementsByClassName("list_comment");
const commentInput = document.querySelector(".form_comment .inp_comment");
const ul = document.createElement("ul");
const strong = document.createElement("strong");
const svg = innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" aria-label="좋아요" viewBox="0 0 24 24" class="img_g"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z" stroke-width="0.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
const buttonLike = document.querySelector(".list_comment .btn_like");

function commentTrue() {
  if (commentGroupChild.length[0]) {
    // 댓글이 있으면 동작 x
    return
  } else {
    // 댓글이 없을때 ul 과 screen_out 추가
    commentGroup.appendChild(strong);
    commentGroup.appendChild(ul);
    ul.className = "list_comment";
    strong.className = "screen_out";
    strong.innerText = "댓글 리스트";
  }
}

function commentList(event) {
  event.preventDefault(); // 새로고침 방지
  commentTrue(); // ul과 screen_out 동작 함수
  const list = document.querySelector(".list_comment");  
  const li = document.createElement("li");
  list.appendChild(li);
  const commentNew = commentInput.value; // submit하는 텍스트를 새로운 변수에 저장
  li.innerHTML = `<span class="screen_out">댓글 작성자: </span><a href="#none" class="link_user">sumi_zz</a><span class="screen_out">댓글 내용: </span>${commentNew} <button class="btn_like" type="button">${svg}</button>`;
    /* 댓글 좋아요 */
    const buttonLike = document.querySelector(".list_comment .btn_like");
    // console.log(buttonLike);
    buttonLike.addEventListener("click", function() {
      buttonLike.classList.toggle("on");
    });
  commentInput.value = ""; // 텍스트상자 안의 텍스트 초기화
}
commentForm.addEventListener("submit", commentList);


/***** 유저 아아디 검색 *****/
const inpSearch = document.querySelector(".inner_nav .inp_search");
// userId[0].id;
const userId = [
  { instaId :"wecode_bootcamp", info : "굿~~~"},
  { instaId :"sumi_zzang!!", info : "굿~~~"},
  { instaId :"wecode_founder", info : "굿~~~"},
  {
    instaId :"wecode_korea",
    info : "굿~~~"
  },
  {
    instaId :"sumi_zzang!!",
    info : "굿~~~"
  },
  {
    instaId :"sumi_zzang!!",
    info : "굿~~~"
  },
  {
    instaId :"sumi_zzang!!",
    info : "굿~~~"
  },
  // {
  //   instaId :"sumi_zzang!!",
  //   info : "굿~~~"
  // },
  // {
  //   id :"sususususususususussusususussusususususususususususususuussusu!!",
  //   info : "sususususususususussusususussusususususususususususususuussusu"
  // },
  // {
  //   id :"일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
  //   info : "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십"
  // },
];  

function filterUser(query) {
  return userId.filter(function(value) {
      return value.instaId.indexOf(query) > -1;
  })
}

function filterId(event)  {
  const titUser = document.querySelector(".inner_nav .list_user .tit_user");
  const regExp = /[a-zA-Z]/g; // 영어
  const value = filterUser(inpSearch.value);
  for (let i = 0; i < userId.length; i++) {
    // titUser.innerHTML = value[i];
    console.log(value[i].instaId);
  }
}
inpSearch.addEventListener("keyup", filterId);