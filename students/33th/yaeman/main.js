const commentForm = document.querySelector('.upload-form');
const commentInput = document.querySelector('#comment-write');
const uploadButton = document.querySelector('.upload');
const commentValue = commentInput.value;

const commented = document.querySelector('.commented');

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

function uploadBtn(e) {
  let commentValue = commentInput.value; 
  if(commentValue) {
    uploadButton.disabled = false;
    // uploadButton.style.opacity = 1;
    uploadButton.style.cursor = "pointer";
    uploadButton.style.color = "#0095f6";
  } else {
    uploadButton.disabled = true;
    uploadButton.style.cursor = "default";
    uploadButton.style.opacity = .4;
  }
  if(uploadButton.disabled=false && e.key === "Enter") {
    e.preventDefault();
    enterPost();
    document.querySelector('.upload').click();
  }
}

function enterPost() {
  if(commentInput.value) {
    const newUser = document.createElement('span');
    newUser.className = "user-id";
    newUser.innerText = "ym";

    const newComment = document.createElement('span');
    newComment.className = "comment-box";
    newComment.appendChild(newUser);
    newComment.innerHTML += commentInput.value;

    const newImg = document.createElement('img');
    newImg.className = "comment-heart";
    newImg.setAttribute('src', "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png");

    const newList = document.createElement('li');
    newList.className = "newcomment-list";
    newList.appendChild(newComment);
    newList.appendChild(newImg);
    commented.appendChild(newList);
    commentInput.value = "";

    uploadButton.disabled = true;
    uploadButton.style.cursor = "default";
    uploadButton.style.opacity = .4;
  }
}

commentInput.addEventListener('keyup', uploadBtn);
uploadButton.addEventListener('click', enterPost);