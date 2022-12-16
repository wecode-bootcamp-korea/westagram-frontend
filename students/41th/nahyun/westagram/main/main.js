const comment = document.querySelector(".article-comment");
const input = document.querySelector(".article-input input");
const btn = document.querySelector(".btn");
const idInput = document.querySelector(".search");
const idBox = document.querySelector(".idBox");
const nav = document.querySelector("nav");
const profileBox = document.querySelector(".article-pic");
const hiddenBox = document.querySelector(".hiddenBox");
const main = document.querySelector("main");

function commentArr() {
    const inputValue = input.value;
    const nickname = document.createElement("span");
    const comments = document.createElement("span");
    const div = document.createElement("div");
    const icon = document.createElement("i");
    const heart = document.createElement("i");

    if (input.value === "") {
        input.focus();
        return;
    }

    nickname.innerText = "nahyun";
    comments.innerText = inputValue;

    nickname.setAttribute("class", "nickname-bold");
    comments.setAttribute("class", "comment");
    icon.setAttribute("class", "fa-solid fa-trash");
    heart.setAttribute("class", "fa-sharp fa-solid fa-fish");

    div.appendChild(nickname);
    div.appendChild(comments);
    div.appendChild(icon);
    div.appendChild(heart);

    comment.appendChild(div);

    icon.addEventListener("click", () => {
        div.remove();
    });

    heart.addEventListener("click", () => {
        heart.classList.toggle("heart");
    });

    input.value = "";
    input.focus();
}

input.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        commentArr();
    }
});
input.addEventListener("keyup", () => {
    if (input.value.length >= 1) {
        btn.style.color = "rgb(0, 95, 196)";
        btn.style.fontWeight = "bold";
    } else if (input.value === "") {
        btn.style.color = "rgb(157, 222, 244)";
        btn.style.fontWeight = "nomal";
    }
});
btn.addEventListener("click", () => {
    commentArr();
});

idInput.addEventListener("focusin", () => {
    idBox.style.display = "block";
});
idInput.addEventListener("focusout", () => {
    idBox.style.display = "none";
    idInput.value = "";
});

profileBox.addEventListener("mouseover", () => {
    hiddenBox.style.display = "block";
});

main.addEventListener("click", () => {
    hiddenBox.style.display = "none";
});
