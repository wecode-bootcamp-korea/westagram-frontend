//게시글 좋아요
const feedBtn = document.querySelector('.heartbtn');

feedBtn.addEventListener("click", ()=> {
  if(feedBtn.classList.contains('red')){
    feedBtn.classList.remove('red')
  }else {
    feedBtn.classList.add('red')
  }
})



// 댓글 창 좋아요 
const loveitBtn = document.querySelector(".reply_like");
  function toRed(){
    const loveIcon = document.querySelector("#small");
    if(loveIcon.classList.contains('red')){
      loveIcon.classList.remove('red');
    }else {
      loveIcon.classList.add('red')
    }
  }
  loveitBtn.addEventListener("click",toRed)


// 댓글기능 구현 중  
  function registerReply() {
    const newReply = document.createElement("li");  // 요소 노드 추가
    const subject = document.querySelector("#replysubmit");  // 폼의 텍스트 필드
    let number = Math.floor(Math.random()*100)
    const textTemplate = `User ${number} ${subject.value}`
    
    if(subject.value){
      const newText = document.createTextNode(textTemplate);  // 텍스트 필드의 값을 텍스트 노드로 만들기
      newReply.appendChild(newText);   // 텍스트 노드를 요소 노드의 자식 노드로 추가
  
      const itemList = document.querySelector("#replylist");  // 웹 문서에서 부모 노드 가져오기 
      itemList.appendChild(newReply);  // 새로 만든 요소 노드를 부모 노드에 추가
  
      subject.value="";
    }else {
      alert("댓글을 입력하세요!")
    }
  };

//댓글삭제하기 해보기
//innerHTML 사용하기