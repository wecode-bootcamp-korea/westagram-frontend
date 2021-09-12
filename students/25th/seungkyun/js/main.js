const textField = document.querySelector(".commentField");
const textfieldBtn = document.querySelector(".uploadComment");
const commentLine = document.querySelector(".picText");
const userName = "anonymous1234"

// text 입력 시 버튼 활성화
document.addEventListener('keyup', function() {
  if (textField.value != "") {
    textfieldBtn.style.opacity = "1.0";
    textfieldBtn.disabled = false;
    textfieldBtn.style.cursor = "pointer";
  } else {
    textfieldBtn.style.opacity = "0.5";
    textfieldBtn.disabled = true;
    textfieldBtn.style.cursor = "default";
  }
})

textfieldBtn.addEventListener('click', () => addComment())
textField.addEventListener('keypress', e =>
{if (e.key == 'Enter') {addComment()}});

function addComment() {
  let getComment = textField.value;
  let inputComment = document.createElement('div');
  inputComment.className = "commentLines";
  inputComment.innerHTML = `<div><a href="#">${userName}</a><span>${getComment}</span></div>
    <img alt="heart img" class="commentHeart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />`;
  
  commentLine.appendChild(inputComment);
  textField.value = "";
}