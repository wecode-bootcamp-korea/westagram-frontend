const commentInput = document.getElementById("inputText");

const submitButton = document.getElementById("inputButton");;

const commentList = document.getElementById("commentLists")

function addComment(Value) {
  const newComment = document.createElement("li");
  const newName = document.createElement("span");
  const newContent = document.createElement("span");

  newName.classList.add("name");
  newName.innerText = "juyoung";
  newContent.innerText = Value;

  newComment.appendChild(newName);
  newComment.appendChild(newContent);

  commentList.appendChild(newComment);

}  

addComment("이것이 자바스크립트구나" );  



function submitComment () {
  const commentValue = commentInput.value;

  if (commentValue.length > 0) { 
    addComment(commentValue);
    submitButton.style.opacity = 1;




  } else {
    alert("댓글을 달아주세요!");
  }

}

submitButton.addEventListener('click', submitComment);


/// 버튼 활성화 

function inputText() {
  const commentValue = commentInput.value;

  if (commentValue.length > 0 ) {
    submitButton.style.opacity = 1;
    submitButton.style.cursor = "pointer";

  } else {
    submitButton.style.opacity = 0.5;
    submitButton.style.cursor = "pointer";
  }
}

commentInput.addEventListener('keyup', inputText)

thisIsPw.addEventListener('keyup', function() { //키업을 했을때, 함수를 실행시킨다.
    const passwordValue = document.querySelector('#password').value;
    const rePasswordValue = document.querySelector('#re-password').value;
    const pTagAlert = document.querySelector('.alert');

    if (passwordValue !== rePasswordValue) {
      pTagAlert.innerHTML = '비밀번호가 일치하지 않습니다'
    } 
    if (passwordValue === rePasswordValue) {
      pTagAlert.innerHTML = ''  
    }
  }); 