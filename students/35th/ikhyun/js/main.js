
let comment = document.querySelector('.comment')
let submit = document.querySelector('.submit')
let commentTime = document.querySelector('.comment-time')
let newCommentParents = document.querySelector('.create-comment-div')
let deleteAndHeart = document.querySelector('.delete-heart')


function createComment() {
    if(comment.value){
    let createCommentDiv =  document.createElement('div')
    createCommentDiv.className = 'create-comment';
    newCommentParents.appendChild(createCommentDiv)

    let createNewCommentDiv =  document.createElement('div')
    createNewCommentDiv.className = 'new-comment';
    createCommentDiv.appendChild(createNewCommentDiv)

    let createIconDiv =  document.createElement('div')
    createIconDiv.className = 'delete-heart';
    createCommentDiv.appendChild(createIconDiv)

    let newUserId = document.createElement('span')
    newUserId.className = 'user-id';
    newUserId.innerHTML = 'userID'
    createNewCommentDiv.appendChild(newUserId);

    let newComment = document.createElement('span')
    newComment.className = 'user-comment';
    newComment.innerHTML = comment.value;
    createNewCommentDiv.appendChild(newComment);

    let heartIcon = document.createElement('i')
    heartIcon.className = 'fa-regular fa-heart';
    createIconDiv.appendChild(heartIcon)

    let deleteIcon = document.createElement('i')
    deleteIcon.className = 'fa-solid fa-trash';
    createIconDiv.appendChild(deleteIcon)

    comment.value = "";
    commentTime.innerHTML = "방금전";
    heartIcon.addEventListener ('click',function() {
        heartIcon.style.color === 'red' ? (
            heartIcon.style.color= "",
            heartIcon.className ="fa-regular fa-heart"
        ) : (
            heartIcon.style.color= "red",
            heartIcon.className = 'fa-solid fa-heart'
        )
    })
    deleteIcon.addEventListener('click',function() {
        createCommentDiv.remove();
        commentTime.innerHTML = "";
    })
    }
}
function createCommentByEnter(event){
    if(event.key === 'Enter'){
        createComment()
    }
}
submit.addEventListener('click',createComment)
comment.addEventListener('keyup',createCommentByEnter)
