let newComment = document.querySelector('.writing-input');
let addButton = document.querySelector('.writing-btn');

let commentList = [];

addButton.addEventListener('click', addComment);

function addComment() {
  let userComment = newComment.value;
  commentList.push(userComment)
  newComment.value = ''
  render();  
}

function render() {
  let resultHTML = '';

  for(let i=0; i<commentList.length; i++){
    let commentHTML = `
    <div class="comment">
      <div class="comment-box">
        <div>
          <span class="userId">afdgdfsd</span>
          <span>${commentList[i]}</span>
        </div>
        <div class="deletebtn">
          <button class='commentDelete'>삭제</button>
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
      <div class="comment-time">42분 전</div>
    </div>`

    resultHTML = resultHTML + commentHTML
  } 
  document.querySelector('.comments-section').innerHTML = resultHTML
}

function onKeyUp(e){
  if(e.key === "Enter"){
    addComment();
  }
}


// let borderHeart = document.querySelector('.fa-regular fa-heart');

// changeHeart.addEventListener('click', function() {
//  borderHeart.classList.toggle('borderHeart')
// })

// let redHeart = document.querySelector('.fa-solid fa-heart').style.display = 'none'

let deleteButton = document.querySelector('.commentDelete');

deleteButton.addEventListener('click', deleteComment);
console.log('clicked')
function deleteComment() {

}