const submit = document.getElementById('submit')
const comment = document.getElementById('comment')
const form = document.querySelector(".comment-write");
const commentsContainer = document.querySelector("#comments")

const commentPost = () => {
    comment.value.length > 0
        ? (submit.disabled = false)
        : (submit.disabled = true);
    submit.style.cursor = 'pointer';
}

comment.addEventListener('keyup', commentPost);



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = comment.value;
    comment.value = "";
        const newComment = document.createElement("div");
        
        newComment.innerHTML = `<span class="textbold">Me_me  </span> ${input} <img src="../img/heart.png"> `;
        commentsContainer.appendChild(newComment);
        
});



// 게시 버튼 활성화/비활성화

