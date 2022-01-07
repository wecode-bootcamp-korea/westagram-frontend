function reply(){
    let newComment = document.createElement('p')
    let comments = document.getElementsByClassName("comments")[0];
    comments.appendChild(newComment);
    newComment.className = "newComment";
    
    const writeValue = document.getElementsByClassName("writeComment")[0].value;
    
    newComment.innerHTML = writeValue;
    
  }
  const commentBtn = document.getElementsByClassName("commentBtn")[0];
  
  commentBtn.addEventListener("click", reply);
