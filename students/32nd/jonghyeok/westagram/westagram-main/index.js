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

function deleteComment(commentText) {
  //commentList에서 commentText와 일치하는 요소 찾아서 삭제...!
  // console.log(commentText)
  let index = commentList.indexOf(commentText)
  commentList.splice(index, 1)
}

function render() {
  let resultHTML = '';

  for(let i=0; i<commentList.length; i++){
    let commentHTML = `
    <div class="comment">
      <div class="comment-box">
        <div>
          <span class="userId">afdgdfsd</span>
          <span class="commentText">${commentList[i]}</span>
        </div>
        <div class="deletebtn">
          <button class='commentDelete'>삭제</button>
          <i class="fa-regular fa-heart comment-heart"></i>
        </div>
      </div>
      <div class="comment-time">42분 전</div>
    </div>`

    resultHTML = resultHTML + commentHTML
    document.querySelector('.comments-section').innerHTML = resultHTML
    
    let deleteBtns = document.querySelectorAll('.commentDelete'); //배열
    //반복문으로 배열을 순회하여 요소마다 addEventListener 추가!

    for (let i = 0; i< deleteBtns.length; i++) {
      deleteBtns[i].addEventListener('click', function(event) {
        let commentText = document.querySelector('.commentText').innerHTML
        event.target.parentNode.parentNode.parentNode.remove();
        deleteComment(commentText)
      })
    }
  }
}

function onKeyUp(event){
  if(event.key === "Enter"){
    addComment();
  }
}


// let borderHeart = document.querySelector('.fa-regular fa-heart');
// console.log(borderHeart)
// changeHeart.addEventListener('click', function() {
//  borderHeart.classList.toggle('borderHeart')
// })

// let redHeart = document.querySelector('.fa-solid fa-heart').style.display = 'none'

