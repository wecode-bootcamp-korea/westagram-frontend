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

// 게시 버튼 활성화/비활성화

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = comment.value;
    comment.value = "";
    const newComment = document.createElement("div");
    newComment.setAttribute('class', 'newcomment')
    newComment.innerHTML = `<span class="textbold">Me_me  </span> ${input}
        <span id='heart'><i class="fa-regular fa-heart"></i> </span>`;
    commentsContainer.appendChild(newComment);
    const heart = document.getElementById('heart');

    heart.addEventListener("click", (e) => {
        e.target.remove();
        // .parentElement.remove();
        const redHeart = document.createElement("span");
        redHeart.setAttribute('class','Red')
        redHeart.innerHTML = `<i class="fa-solid fa-heart"></i>`
        newComment.appendChild(redHeart);
    })
});

// 댓글기능
