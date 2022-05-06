const commentForm = document.querySelector('.upload-form');
const commentInput = document.querySelector('#comment-write'); //input창
const uploadButton = document.querySelector('.upload'); //게시버튼
const commentValue = commentInput.value; //input값

const commented = document.querySelector('.commented'); //추가될 댓글박스

// function uploadBtn() {
//   const commentValue = commentInput.value;

//   if(commentValue.length > 0){ 
//     uploadButton.disabled = false;
//     uploadButton.style.cursor = "pointer";
//     uploadButton.style.color = "#0095f6";
//   } else {
//     uploadButton.disabled = true;
//     uploadButton.style.cursor = "default";
//     uploadButton.style.color = "#99d2f8";
//   }
// }


// function createItem(text) {
//   // console.log(text);
//   const reply = document.createElement("li");
//   reply.setAttribute("class", reply);
//   reply.innerHTML =
//   `<div class="replyDetail">
//     <a href="" class="user-id"><span>kongji<span></a>
//     <span>${text}</span>
//   </div>
//   <span class="sub-heart">
//     <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
//               width="12px" height="12px">
//   </span>
//   `
//   commented.appendChild(reply);
// }

// function uploadBtn(e) {
//   let commentValue = commentInput.value; 
//   if(commentValue) {
//     uploadButton.disabled = false;
//     uploadButton.style.cursor = "pointer";
//     uploadButton.style.color = "#0095f6";
//   } else {
//     uploadButton.disabled = true;
//     uploadButton.style.cursor = "default";
//     uploadButton.style.opacity = .4;
//   }
//   // if(uploadButton.disabled=false && e.code === 'Enter') {
//   //   enterPost();
//   // }
// }

// function enterPost() {
//   if(commentInput.value) {
//     const newUser = document.createElement('span');
//     newUser.className = "user-id";
//     newUser.innerText = "ym";

//     const newComment = document.createElement('span');
//     newComment.className = "comment-box";
//     newComment.appendChild(newUser);
//     newComment.innerHTML += commentInput.value;

//     const newImg = document.createElement('img');
//     newImg.className = "comment-heart";
//     newImg.setAttribute('src', "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png");

//     const newList = document.createElement('li');
//     newList.className = "newcomment-list";
//     newList.appendChild(newComment);
//     newList.appendChild(newImg);
//     commented.appendChild(newList);
//     commentInput.value = "";

//     uploadButton.disabled = true;
//     uploadButton.style.cursor = "default";
//     uploadButton.style.opacity = .4;
//   }
// }

const postCommentInFeed = () => {
  const commentInput = document.querySelector('#comment-write'); 
  const uploadButton = document.querySelector('.upload');

  //댓글 입력시 요소 생성
  const addNewComment = () => {
    const newCommentLocation = document.getElementsByClassName('comment-list')[0];
    const newComment = document.createElement('li');
    
    newComment.innerHTML =`
      <div class="user-board">
        <a href="">yaeman</a>
        <span>${commentInput.value}</span>
      </div>
      <button><i class="fa-regular fa-heart"></i></button>
    `
    newCommentLocation.appendChild(newComment);
    commentInput.value="";
  }

  //사용자 입력 들어올 시, 게시 버튼 활성화
  commentInput.addEventListener('keyup', (e) => {
    commentInput.value ? uploadButton.style.opacity = '1' : uploadButton = '.3';
    if(e.keyCode === 13 && commentInput.value) {
      e.preventDefault();
      addNewComment();
    }
  });

  //댓글 게시
  uploadButton.addEventListener('click', () => {
    if(commentInput.value) {
      addNewComment();
    } else {
      alert("댓글이 입력되지 않음");
    }
  });
}
postCommentInFeed();



// commentInput.addEventListener('keyup', uploadBtn);
// uploadButton.addEventListener('click', enterPost);