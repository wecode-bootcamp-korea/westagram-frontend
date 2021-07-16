const thisIsComment = document.querySelector('.comment_box');
const thisIsButton = document.getElementsByClassName('comment_submit')[0];
const thisIsNew = document.getElementsByClassName('new_comment')[0];

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

function enterPost(){
    if(thisIsComment.value){
        const newUser = document.createElement('span');
        newUser.className = "commenet_user_id";
        newUser.innerText = "k_rystalee";
      
        const newComment = document.createElement('span');
        newComment.className = "comment_text";
        newComment.appendChild(newUser);
        newComment.innerHTML +=thisIsComment.value;
       
        const newImg = document.createElement('img');
        newImg.className = "comment_heart";
        newImg.setAttribute('src','img/heart.png');
        
        const newList = document.createElement('li')
        newList.className = "new_comment_list";
        newList.appendChild(newComment);
        newList.appendChild(newImg);
        thisIsNew.appendChild(newList);
        thisIsComment.value = "";
        
        thisIsButton.disabled = true;
        thisIsButton.style.opacity = .4;
    }  
};

thisIsComment.addEventListener('keyup',buttonOn)
thisIsButton.addEventListener('click', enterPost) 