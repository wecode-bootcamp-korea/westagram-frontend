//const { text } = require("express");
/*document.asdfa.addEventListener("keyup",()=>{
});;*/
/*function onKeyUp(e) {
  if (e.keyCode == 13) {
  }
}*/
/*const getComment = document.createElement("div");
getComment.setAttribute("class", "add-comment");
getComment.innerHTML = "addcomment.value";
add_comment.appendChild(getComment);*/

const upload_comment = document.getElementById("upload-comment");
const addcomment = document.getElementById("comment");
const add_comment = document.querySelector(".add-comment");
const getComment = document.createElement("div");

function createNewComment() {
  getComment.setAttribute("class", "add-comment");
  getComment.innerHTML = addcomment.value;
  add_comment.appendChild(getComment);
  //addcomment.value ="";
}

upload_comment.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (e.code === "Enter") {
    createNewComment;
  }
});
