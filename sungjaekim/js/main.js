// 버튼
let submitCommentElement = document.getElementById("submitComment");
// 인풋
let inputCommentElement = document.getElementById("inputComment");

const addComment = () => {
  if (!inputCommentElement.value) return;
  let firstComment = document.querySelector(".postCommentWrap");

  let newDiv = document.createElement("div");
  newDiv.className = "letter-box";
  newDiv.innerHTML = `<p><b>JAKESJK</b> ${inputCommentElement.value}&nbsp;</p>  <b style="color: gray;">1초 전</b>`;

  firstComment.appendChild(newDiv);
  inputCommentElement.value = "";
};

submitCommentElement.addEventListener("click", addComment);

inputCommentElement.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addComment();
  }
});
