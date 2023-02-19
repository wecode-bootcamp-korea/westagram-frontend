//console.log(addcomment);
/*const upload_comment = document.getElementById("upload-comment");
console.log(upload_comment);*/

//console.log(add_comment);

//console.log(addcomment.value);
/*document.asdfa.addEventListener("keyup",()=>{

});
console.log(addcomment.value);*/

/*function onKeyUp(e) {
  if (e.keyCode == 13) {
  }
}*/

/*const getComment = document.createElement("div");

getComment.setAttribute("class", "add-comment");
getComment.innerHTML = "addcomment.value";
add_comment.appendChild(getComment);*/

/*function onKeyUp(e) {
  if (e.keyCode == 13) {
  }


  여기 물어볼거  getComment = document.createElement("div");
const addcomment = document.getElementById("comment");
const add_comment = document.querySelector(".add-comment");

function createNewComment() {
  const getComment = document.createElement("div");
  const yourName = document.createElement("h6")

  getComment.innerHTML = addcomment.value;

  add_comment.appendChild(getComment);
}

addcomment.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    createNewComment();
    addcomment.value = "";
  }
});





}*/
const addcomment = document.getElementById("comment");
const add_comment = document.querySelector(".add-comment");

// function nickName() {
//   //
//   //const span = document.createElement("span");
//   //// add_comment.innerHTML = `<span>Hong</span>`;
//   // yourName.style = "margin-right:10px";
//   //
//   //
// }

function createNewComment() {
  const getComment = document.createElement("span");
  const yourName = document.createElement("strong");
  yourName.className = "nickName";
  const div = document.createElement("div");
  add_comment.appendChild(div);

  yourName.value = "Hong";

  yourName.innerHTML = yourName.value;
  getComment.innerHTML = addcomment.value;
  div.appendChild(yourName);
  div.appendChild(getComment);
}

addcomment.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // nickName();
    nickName() + createNewComment();
    // createNewComment();
    addcomment.value = "";
  }
});
