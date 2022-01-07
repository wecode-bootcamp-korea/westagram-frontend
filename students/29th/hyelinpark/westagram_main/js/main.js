// 댓글 추가 + 삭제 기능
const input = document.querySelector(".comment");

input.addEventListener("keyup", uploadComment);

function uploadComment(e) {
  let commentValue = input.value;

  let comment = document.querySelector(".new_comment");
  let makeDiv = document.createElement("div");
  let makeUser = document.createElement("span");
  let makeMsg = document.createElement("span");
  let makeBtn = document.createElement("button");

  if (e.keyCode === 13 && commentValue.length > 0) {
    makeDiv.className = "commentDiv";
    makeUser.className = "commentUser";
    makeMsg.className = "commentMsg";
    makeBtn.className = "commentBtn";

    makeUser.style.fontWeight = "bold";
    makeUser.style.marginRight = "3px";
    makeMsg.style.marginRight = "5px";
    makeBtn.style.borderStyle = "none";
    makeBtn.style.fontSize = "3px";
    makeBtn.style.borderRadius = "50px";
    makeBtn.style.textAlign = "center";

    makeUser.innerHTML = "jinxsik";
    makeMsg.innerHTML = input.value;
    makeBtn.innerHTML = "x";

    comment.appendChild(makeDiv);
    makeDiv.appendChild(makeUser);
    makeDiv.appendChild(makeMsg);
    makeDiv.appendChild(makeBtn);
    input.value = "";
    input.focus();

    makeBtn.addEventListener("click", (event) => {
      const btn = event.target;
      const deleteComment = btn.parentNode;

      comment.removeChild(deleteComment);
    });
  }
}
