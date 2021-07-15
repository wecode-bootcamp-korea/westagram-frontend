const thisIsComment = document.querySelector('.comment_box');
const thisIsButton = document.getElementsByClassName('comment_submit')[0];
const thisIsNew = document.getElementsByClassName('newcomment')[0];



thisIsComment.addEventListener('keyup',buttonOn)

 function buttonOn(e){
   let a = thisIsComment.value
    if(a){
        thisIsButton.disabled = false;
        thisIsButton.style.opacity = 1;
    } else {
        thisIsButton.disabled = true;
        thisIsButton.style.opacity = .4;
    }
  
    if (thisIsButton.disabled==false && e.code == 'Enter') {
        enterPost();
    }

 };


thisIsButton.addEventListener('click', enterPost) 
    

function enterPost(){
    if(thisIsComment.value){
        const newUser = document.createElement('span');
        newUser.className = "userid";
        newUser.innerText = "k_rystalee";
      
        const newComment = document.createElement('span');
        newComment.className = "commentbox";
        newComment.appendChild(newUser);
        newComment.innerHTML +=thisIsComment.value;
       
        const newImg = document.createElement('img');
        newImg.className = "comment_heart";
        newImg.setAttribute('src','img/heart.png');
        
        const newList = document.createElement('li')
        newList.className = "newcommentlist";
        newList.appendChild(newComment);
        newList.appendChild(newImg);
        thisIsNew.appendChild(newList);
        thisIsComment.value = "";
        
        thisIsButton.disabled = true;
        thisIsButton.style.opacity = .4;
    }  
};


