const commentInput = document.getElementById('comment-input');
const commentBtn = document.getElementsByClassName('comment-submit')[0];
const commentList = document.getElementsByClassName('comments')[0];

commentInput.addEventListener('keyup', function(event) {
    if (commentInput.value) {
        commentBtn.disabled = false;
    }
    else {
        commentBtn.disabled = true;
    }
})

commentInput.addEventListener('keypress', function(e){
    if (commentInput.value) {
        if (event.which === 13) {
            const addComent = document.createElement('li')
            addComent.innerHTML = `<span><span class="font-point userID">seizetheday</span>` + commentInput.value + 
            `</span><img class="comment-heart" src="./img/heart.png" alt="하트">` 
            commentList.appendChild(addComent);
            const changeTime = document.getElementsByClassName("time-log")[0];
            changeTime.innerHTML = `<span class="time-log">방금 전...</span>`
            commentInput.value = "";
        }
    }
})

commentBtn.addEventListener('click', function(){
    if (commentInput.value) {
        const addComent = document.createElement('li')
        addComent.innerHTML = `<span><span class="font-point userID">seizetheday</span>` + commentInput.value + `</span><img class="comment-heart" src="./img/heart.png" alt="하트">`;
        commentList.appendChild(addComent);
        const changeTime = document.getElementsByClassName("time-log")[0];
        changeTime.innerHTML = `<span class="time-log">방금 전...</span>`
        commentInput.value = "";
    }
})

const search = document.querySelector('.fa-search');

const headerInput = document.getElementsByClassName("input-div")[0];

const reset = function() {
    
}
headerInput.addEventListener("keyup", () =>{
    reset();
    search.style.display = 'none';
})