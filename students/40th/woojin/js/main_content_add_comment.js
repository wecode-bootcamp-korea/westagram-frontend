// input element
const commentTextElement = document.getElementById("addCommentText");
// add button element
const addCommentBtnElement = document.getElementById("addComment");
// comments list(<ul> tag) element
const commentListElement = document.getElementById("commentList");
// profile name element
const profileNameElement = document.getElementsByClassName("myProfileName")[0];

// click event of button
addCommentBtnElement.addEventListener("click", function (e) {
  let commentText = commentTextElement.value;
  if(commentText.length>0) {
    createTagAndInputText();
    changeColorOfButton();
  }
});

// keydown event of enter key
commentTextElement.addEventListener("keydown", function (e) {
  changeColorOfButton();
  let commentText = commentTextElement.value;
  // change color of button with key
  if (e.keyCode === 13 && commentText.length > 0) {
    createTagAndInputText();
    changeColorOfButton();
  }
});

// back to button's color if there are not text
function changeColorOfButton() {
  let commentText = commentTextElement.value;
  if(commentText.length > 0) {
    addCommentBtnElement.style.color = 'rgb(0, 149, 246, 1)';
  } else {
    addCommentBtnElement.style.color = 'rgb(0, 149, 246, 0.3)';
  }
}

// create 'li' tag and insert text to input field
function createTagAndInputText() {
  let commentText = commentTextElement.value;
  let newCommentList = document.createElement("li");
  newCommentList.style.margin = '3px 0'
  newCommentList.style.display = 'flex'
  newCommentList.style.justifyContent = 'space-between'
  newCommentList.style.alignItems = 'center'
  
  /// <div> tag for name+text
  let leftSide = document.createElement('div');
  leftSide.style.display = 'flex'

  /// <div tag for like + delete
  let rightSide = document.createElement('div');
  rightSide.style.display = 'flex'

  
  /// <span> tag No.1 = insert profile name
  const profileNameText = profileNameElement.textContent;
  let createAuthorInComment = document.createElement("span");
  createAuthorInComment.innerText = profileNameText;
  createAuthorInComment.style.fontWeight = "600";
  createAuthorInComment.style.fontSize = "14px";
  createAuthorInComment.style.marginRight = "5px";

  /// <span> tag No.2 = insert text of input field
  let createTextInListTag = document.createElement("span");
  createTextInListTag.innerText = commentText;

  /// <button> tag No.1 = insert heart
  let createLikeHeart = document.createElement('button');
  createLikeHeart.style.display = 'inline-block'
  createLikeHeart.style.backgroundImage = 'url("/students/40th/woojin/main_structure_image/heart.png")'
  createLikeHeart.style.backgroundColor = 'transparent'
  createLikeHeart.style.backgroundSize = 'cover'
  createLikeHeart.style.width = '15px'
  createLikeHeart.style.height = '13px'
  createLikeHeart.style.marginRight = '8px'
  
  /// <button> tag No.2 = insert delete
  let createDelete = document.createElement('button');
  createDelete.style.display = 'inline-block'
  createDelete.style.backgroundImage = 'url("/students/40th/woojin/main_structure_image/bin.png")'
  createDelete.style.backgroundColor = 'transparent'
  createDelete.style.backgroundSize = 'cover'
  createDelete.style.width = '13px'
  createDelete.style.height = '13px'


  /// append list-------------------------------
  commentListElement.appendChild(newCommentList);

  newCommentList.appendChild(leftSide)
  newCommentList.appendChild(rightSide)

  leftSide.appendChild(createAuthorInComment);
  leftSide.appendChild(createTextInListTag);
  rightSide.appendChild(createLikeHeart);
  rightSide.appendChild(createDelete);


  /// delete comment input field(clear)
  commentTextElement.value = "";

  createLikeHeart.addEventListener('click', function(e) {
    changeColorOfHeart(createLikeHeart)
  });

  createDelete.addEventListener('click', function(e) {
    deleteText(newCommentList);
  })
}



// like change
function changeColorOfHeart(a) {
  a.style.backgroundImage = 'url("/students/40th/woojin/main_structure_image/colorheart.png")'
}

// delete comment
function deleteText(a) {
  a.remove()
}


