const inputComment = document.querySelector("#new_comment_txt");
const postBtn = document.querySelector("button");
const list = document.querySelector("#posted_comments")

function activateBtn() {
  let commentTxt = inputComment.value;

  if (commentTxt.length > 0) {
    postBtn.style.color = "#1c7ed6";
    postBtn.style.cursor = "pointer";
  }
};

inputComment.addEventListener('keyup', activateBtn);
inputComment.addEventListener('keyup', function (e) {
  if (e.key === "Enter") {
    if (inputComment.value !== "") {
      const cmtTxt = inputComment.value;
      const newLI = document.createElement("LI");
      newLI.innerHTML = `<span><span style="font-weight:bold">user</span> ${inputComment.value}</span>`;
      list.append(newLI);
    }
  }
});

postBtn.addEventListener('click', function (e) {
  if (inputComment.value !== "") {
    const cmtTxt = inputComment.value;
    const newLI = document.createElement("LI");
    newLI.innerHTML = `<span><span style="font-weight:bold">user</span> ${inputComment.value}</span>`;
    list.append(newLI);
  }
})