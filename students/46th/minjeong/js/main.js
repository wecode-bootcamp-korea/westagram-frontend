//--------------------댓글 내용 입력 후 댓글 추가 기능--------------------

const commentInput = document.querySelector(".comment");
const commentList = document.getElementById("comment-wrapper");

function addComment() {
  const commentText = commentInput.value;
  const commentElement = document.createElement("li");
  commentElement.textContent = commentText;
  commentList.appendChild(commentElement);
  commentInput.value = "";
}

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addComment();
  }
});

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function () {
  addComment();
});

//--------------------댓글 좋아요--------------------

/*const heartImg = document.querySelectorAll("delLike img");

heartImg.forEach(function(img)){
  img.addEventListener("click",function()){
    if (img.src.includes("emptyheart.png")) {
      img.src = "image/heart.png";
    } else if (img.src.includes("image/heart.png")) {
      img.src = "image/emptyheart.png";
    }
  }
}*/

// const clickBtn = document.querySelectorAll(".deleteBtn");

function pinkHeart(img) {
  if (img.src.includes("emptyheart.png")) {
    img.src = "image/heart.png";
  } else if (img.src.includes("image/heart.png")) {
    img.src = "image/emptyheart.png";
  }

  console.log(pinkHeart);
}

//--------------------댓글 삭제--------------------

// const Buttons = document.getElementsByClassName("deleteBtn");
// const Comments = document.getElementsByClassName("comments");

// Buttons.addEventListener("click", deleteButton);

// function deleteButton() {
//   Comments.remove();
// }
