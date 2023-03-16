//이벤트 리스너를 적용 시킬 버튼 이름 정의
//데이터를 당겨올 input 정의
//이벤트 리스너에 정의된 변수 이름으로 함수 정의

// const commentButton = document.querySelector('.upload-btn');

function addComment() {
  const commentValue = document.getElementsByClassName('input-text')[0];
  console.log(commentValue);

  const commentElement = document.createElement('li');
  
  commentElement.innerText = commentValue.value;

  const getListBox = document.getElementsByClassName('comment-ul')[0];
  
  getListBox.appendChild(commentElement);
}

console.log(addComment())
const commentButton = document.getElementById('upload-btn');

commentButton.addEventListener('click', addComment);

// const btn = document.getElementsByClassName("upload-btn");
// console.log(btn);

// btn.addEventListner("click",addComment);