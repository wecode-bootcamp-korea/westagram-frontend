const commentInput = document.getElementsByClassName('input-comment')[0];
const inputButton = document.getElementsByClassName('input-button')[0];
const heartImage = document.getElementsByClassName('heartImage')[0];



function submit(){
  const inputBox = document.getElementsByClassName('comment-input-box')[0];

  const comments = document.createElement("div");
  const contentsBox = document.createElement("div");
  const iconBox = document.createElement("div"); 
  const userName = document.createElement("span");
  const mainText = document.createElement("span");
  const heartIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");

  comments.classList.add("mainComments")
  contentsBox.classList.add("content-box")
  iconBox.classList.add("icon-box")
  userName.classList.add("userName")
  mainText.classList.add("mainText") 
  heartIcon.classList.add("heartImage");
  deleteIcon.classList.add("deleteIcon")

  heartIcon.setAttribute("class", "fa-solid fa-heart heartImage")
  deleteIcon.setAttribute("class", "fa-solid fa-ban deleteIcon" )

  userName.innerHTML = "tjrans9248"
  mainText.innerText = commentInput.value;


  comments.appendChild(contentsBox);
  comments.appendChild(iconBox);
  contentsBox.appendChild(userName);
  contentsBox.appendChild(mainText);
  iconBox.appendChild(heartIcon);
  iconBox.appendChild(deleteIcon);

  inputBox.appendChild(comments);
}

inputButton.addEventListener("click", (event) => {

  submit()
  commentInput.value = "";

});

commentInput.addEventListener("keypress", (event) => {
  if(event.code === 'Enter'){
    submit()
    commentInput.value = "";
  }
})

heartImage.addEventListener("click",(event) => {
  if(event.code === 'click'){
    heartImage.style.color = "red"

  }
})
