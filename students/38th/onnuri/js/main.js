const userId = document.querySelector('.comment_id').textContent;
const commentBox = document.querySelector('.like_box');
const commentInput = document.querySelector('.comment_input input');
const commentBtn = document.querySelector('.comment_btn');
const commentForm = document.querySelector('.comment_input');

window.addEventListener('keyup', () => {
  if(commentInput.value){
    commentBtn.disabled = false;
    commentBtn.style.color = "#0095f6";
  }
});

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createComment(commentInput.value);

})
const addCommentWrap = document.querySelector('.comment_list_wrap');
function createComment (value){
  //댓글생성
  
  const addComment = document.createElement('li');
  addComment.className = "add";
  const newComment = `
  <span class="comment_id">${userId}</span>
  <span class="comment_con">${value}</span>
  <span class="comment_heart">
    <i class="fa-regular fa-heart"></i>
  </span>
  <a class="delete_btn" href="javascript:;">삭제</a>
  `
   
  // const addCommentId = document.createElement('span');
  // addCommentId.className = "comment_id";
  // addCommentId.innerText = userId;
  // const addCommentCon = document.createElement('span');
  // addCommentCon.innerText = value;

  // const addHeart = document.createElement('span');
  // addHeart.className = "comment_heart";
  // const icon = document.createElement('i');
  // icon.className = "fa-regular fa-heart";
  // addHeart.appendChild(icon);
  // const addDelete = document.createElement('a');
  // addDelete.innerText = "삭제";

  // commentBox.appendChild(addComment);
  // addComment.appendChild(addCommentId);
  // addComment.appendChild(addCommentCon);
  // addComment.appendChild(addHeart);
  // addComment.appendChild(addDelete);

  addCommentWrap.appendChild(addComment);
  addComment.innerHTML= newComment;
  //input박스 초기화
  commentInput.value = "";

  //댓글 삭제
  const deleteBtn = document.querySelector('.delete_btn');
  deleteBtn.addEventListener('click',() => {
    addComment.remove();
  });

  //댓글 좋아요 기능
  const addHeart = document.querySelector('.comment_heart');
  const icon = document.querySelector('.comment_heart i')
  addHeart.addEventListener('click', () => {
    console.log(icon);
    if(icon.className === "fa-regular fa-heart"){
      icon.className = "fa-solid fa-heart";
    }else {
      icon.className = "fa-regular fa-heart";
    }
  }); 


}

  





//포스트 좋아요 기능
const postLike = document.querySelector('.like_button');

postLike.addEventListener('click', () => {
  if(postLike.firstChild.className === ""){
    postLike.firstChild.className = "hide";
    postLike.lastChild.className = "";
    postLike.lastChild.style.opacity = 1;
  }else {
    postLike.firstChild.className = "";
    postLike.lastChild.className = "hide";
  }
})

//검색창 활성화 기능
const searchInput = document.querySelector('.search_box input');
const searchCancel = document.querySelector('.search_cancel');
const searchResult = document.querySelector('.balloon.search_result')
const searchImg = document.querySelector('.search_img');
searchInput.addEventListener('focus', (e) => {
  searchImg.style.left = "6px";
  searchCancel.style.display = "block";
  searchResult.style.display = "block";
})

//검색창 비활성화
const blurHandler = searchInput.addEventListener('blur', () => {
  searchImg.style.left = "104px";
  searchCancel.style.display = "none";
  searchResult.style.display = "none";
  searchInput.value ="";
})

//cancel버튼 클릭시 비활성화
searchCancel.addEventListener('click', blurHandler);


//검색어 입력시 기본 검색결과 없애기
searchInput.addEventListener('keyup', () => {
  const initResult = document.querySelector('.no_result');
  resultWrap.innerHTML = "";
  
  //검색어 입력시 리스트 생성
  if(searchInput.value.length !== 0){
    initResult.style.display = "none";
    let filtered = searchId.filter((el) => {
      return el.includes(searchInput.value);
    })
    filtered.forEach((el) => {
      //검색결과 엘리먼트 생성
      const resultList = document.createElement('li');
      const resultImg = document.createElement('img');
      const idWrap = document.createElement('div');
      const resultId = document.createElement('p');
      const resultSay = document.createElement('p');
      resultWrap.appendChild(resultList);
      resultList.appendChild(resultImg);
      resultList.appendChild(idWrap);
      idWrap.appendChild(resultId);
      idWrap.appendChild(resultSay);
      resultId.innerText = el;
      resultSay.innerText = searchUser[el];
      resultImg.src = `img/${el}.jpeg`;
    })
  }else {
    initResult.style.display = "block";
  }
})
const resultWrap = document.querySelector('.search_list_wrap');

//검색될 아이디 만들기
const searchUser = {
  wecode_bootcamp : '>위코드',
  wecode_founder : 'mola',
  wecode_korea : 'coding bootcamp',
  bomsori : '김봄소리',
  bomsori_airline : 'bomsori_fanpage',
  onnuri : 'onstagram',
  one_seoul : '서울 지도',
}
const searchId = Object.keys(searchUser);

//프로필 클릭시 사용자 메뉴 생성
const userBtn = document.querySelector('.modal_popup');
const userMenu = document.querySelector('.balloon.user_menu');
const dim = document.querySelector('.bg');
userBtn.addEventListener('click', ()=>{
  userMenu.style.display = "block";
  dim.style.display = "flex";
  userBtn.style.outline = "1px solid black";
});

dim.addEventListener('click', () => {
  userMenu.style.display = "none";
  dim.style.display = "none";
})





