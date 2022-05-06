function add_comment() {
    const comment_div = document.createElement(“div”);
    const liTag = document.createElement(“li”);
    const heart_img = document.createElement(“img”);
    const delete_btn = document.createElement(“button”);
    delete_btn.innerText = “삭제“;
    heart_img.src = “../image/heart.png”;
    heart_img.style.color = “black”;
    heart_img.classList.add(“comment_heart”);
    comment_div.classList.add(“flex”);
    comment_div.classList.add(“space-between”);
    liTag.innerText = `${USER_ID} ${comment_value.value}`;
    user_comment.appendChild(comment_div);
    comment_div.appendChild(liTag);
    comment_div.appendChild(heart_img);
    comment_div.appendChild(delete_btn);
    comment_value.value = “”;
    heart_img.addEventListener(“click”, () => {
        if (heart_img.style.color === “black”) {
            heart_img.src = “../image/heart_red.png”;
            heart_img.style.color = “red”;
        } else {
            heart_img.src = “../image/heart.png”;
            heart_img.style.color = “black”;
        }
    });
    delete_btn.addEventListener(“click”, () => comment_div.remove());
}
comment.addEventListener(“click”, add_comment);