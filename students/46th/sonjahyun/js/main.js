const commentNode = document.querySelector('.commentInput');
const commentBtn = document.getElementsByClassName('commentBtn')[0];
let callCount = 0;

function postComment() {
    ++callCount;
    const commentText = commentNode.value;

    if(commentText) {
        const commentsListNode = document.querySelector('.commentsList'); 

        const commentAndBtns = document.createElement('div');
        commentAndBtns.className = "commentAndBtns";
        commentsListNode.appendChild(commentAndBtns);

        const newComment = document.createElement('div'); // creates a new comment
        newComment.textContent = commentText;
        newComment.className = "comment";
        commentAndBtns.appendChild(newComment);
  
        const myUsername = document.createElement('span'); // creates a username for each comment
        myUsername.classList.add('bold');
        myUsername.classList.add('floatLeft');
        myUsername.textContent = 'wecode_bootcamp ';
        newComment.insertBefore(myUsername,newComment.firstChild); 

        const deleteBtn = document.createElement('button'); // creates a delete button
        deleteBtn.className = "deleteBtn";
        deleteBtn.classList.add("lighter");
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.innerText = '삭제';
        deleteBtn.setAttribute("id", "deleteBtn" + callCount);
        commentAndBtns.appendChild(deleteBtn);

        const likeBtn = document.createElement('button'); // creates a like button 
        likeBtn.className = "likeBtn";
        likeBtn.setAttribute('type', 'button');
        likeBtn.setAttribute("id", "likeBtn" + callCount);
        commentAndBtns.appendChild(likeBtn);

        const heartIcon = document.createElement('i'); // adds a heart icon to the like button
        heartIcon.className = "fa fa-heart";
        heartIcon.setAttribute("id", "likeBtn" + callCount);
        likeBtn.appendChild(heartIcon);
    
        commentNode.value = ''; // clears the input box after comment added
    }
}

commentBtn.addEventListener('click', postComment); // posts comment if clicked on comment button
commentNode.addEventListener('keypress', function(e) { 
    e.key === 'Enter' ? postComment() : null;
}); // posts comment if the enter key was pressed after writing the comment

document.addEventListener("click", function(event) {
     let btnID = ''; 
    if(event.target.id) {
        btnID = event.target.id;
        const clickedBtn = document.getElementById(btnID);
        if (clickedBtn.classList.contains('likeBtn')) {
            clickedBtn.classList.contains('liked') ? clickedBtn.classList.remove('liked') : clickedBtn.classList.add('liked');
        }
        clickedBtn.classList.contains('deleteBtn') ? clickedBtn.parentElement.remove() : null;   
    }
}); // changes color of the heart if clicked on the like button and deletes the comment if clicked on the delete button
