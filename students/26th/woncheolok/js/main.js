"use strict"

// 1. 댓글을 입력한다 -> input값이 true
// 1-1. 댓글이 입력 될 경우 게시 버튼이 활성화 된다.

const replyInputBox = document.getElementById('replyInputContainer');
const replyInput = document.getElementById('replyInput');
const replySubmitBtn = document.getElementById('replySubmit');

replyInputBox.addEventListener('input', () => {
  if (replyInput.value) {
    replySubmitBtn.disabled = false;
  } else {
    replySubmitBtn.disabled = true;
  } 
})

// 2. 게시 버튼을 클릭하거나, 엔터키를 입력할 경우 댓글이 게시된다.

function addReply () {
  const newList = document.getElementById('replies');
  const newReply = document.createElement('li');

  newReply.className = 'eachReply';  
  const replyDefault = 
  `<a href="" class="inline">
  <span class="bold">Urasawa_Naoki</span>
</a> <span>${replyInput.value}</span><span class="deleteReply"> x </span>`;

  newReply.innerHTML = replyDefault;
  newList.appendChild(newReply);

  function deleteReplies (newReply) {
    const deleteBtn = newReply.querySelector('.deleteReply');
    deleteBtn.addEventListener('click', () => newReply.remove()); 
  }

  deleteReplies(newReply);
  
  replyInput.value = "";

  event.preventDefault();
}

replySubmitBtn.addEventListener('click', () => {
  addReply();
});

replyInput.addEventListener('keypress', () => {
  if(window.event.keyCode === 13) {
    addReply();
  }
});


