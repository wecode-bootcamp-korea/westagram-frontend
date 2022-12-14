const comment = document.querySelector(".article-comment");
const input = document.querySelector(".article-input input");

function commentArr() {
    const inputValue = input.value;
    const nickname = document.createElement("span");
    const comments = document.createElement("span");
    const div = document.createElement("div");
    nickname.innerText = "nahyun";
    comments.innerText = inputValue;

    nickname.setAttribute("class", "nickname-bold");
    comments.setAttribute("class", "comment");

    div.appendChild(nickname);
    div.appendChild(comments);

    comment.appendChild(div);
    input.value = "";
    input.focus();
}

input.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        commentArr();
    }
});
