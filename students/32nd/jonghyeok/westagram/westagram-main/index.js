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
      <i class="fa-regular fa-heart"></i>
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


