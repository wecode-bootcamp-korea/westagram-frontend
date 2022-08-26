const commentInput = document.getElementsByClassName('input-comment')[0];
const inputButton = document.getElementsByClassName('input-button')[0];
const heartImage = document.querySelector('.comment-input-box');
const deleteIcon = document.querySelector('.comment-input-box');

const profileButton = document.querySelectorAll('.profileButton')[0];
const profilePopup = document.querySelectorAll('.profilePopup');
let isOpenProfile = false;

document.body.addEventListener('click', (event) => {
  console.log(document)
  if(isOpenProfile){
    profilePopup[0].style.display = 'none';
    profilePopup[0].style.display = 'none';
    isOpenProfile = false;    
  }
});

profileButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if(!isOpenProfile){
    profilePopup[0].style.display = 'block';
    profilePopup[0].style.display = 'block';
    isOpenProfile = true;
  }else {
    profilePopup[0].style.display = 'none';
    profilePopup[0].style.display = 'none';
    isOpenProfile = false;
  }
});


  

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

  heartIcon.addEventListener('click', (e) => {
    e.target.classList.toggle('heartImage-toggle');
  });


  deleteIcon.addEventListener('click', () => {
    while (comments.hasChildNodes()) {
      comments.removeChild(comments.firstChild);
    }
  });
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
});
