const replyForm = document.querySelector(".reply__form");
const replyInput = replyForm.querySelector("input")
const replyWindow = document.querySelector(".reply__window")

replyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const replyList = document.createElement("li");

    const inputValue = replyInput.value;
    replyList.innerHTML = `
    
    <div class="my__img smaller__border"></div>
    <div class="my__content">

        <div class="my__info">
            <span class="my__id">kangchullee</span>
            <span class="my__talk"> ${inputValue}</span>
        </div>
        <div class="my__status">
            <span class="my__likes">좋아요 <span class="likes__count--up">0</span>개</span>
            <span>답글달기</span>
        </div>

    </div>

        <i class="fa-regular fa-heart heart__likes"></i>
        <i class="fa-solid fa-heart heart__likes--active" style="display:none;" ></i>

        `;

    replyList.setAttribute("class", "reply__list");
    replyWindow.appendChild(replyList);

    replyInput.value = "";
})

// 좋아요

const listWindow = document.querySelector(".reply__window");

const likesCount = document.querySelector(".likes__count--up");

const hearts = document.querySelector(".hearts");
const heartLikes = document.querySelector(".heart__likes");
const colorHeart = document.querySelector(".heart__likes--active");

listWindow.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("heart__likes")) {

        heartToRed(target);

    } else if (target.classList.contains("heart__likes--active")) {

        heartToBlack(target)

    }
})

function heartToRed(target) {
    target.style.display = "none";
    target
        .parentElement
        .children[3]
        .style
        .display = "inline"
    target
        .parentElement
        .children[1]
        .children[1]
        .children[0]
        .children[0]
        .innerHTML = 1;
}

function heartToBlack(target) {
    target.style.display = "none";
    target
        .parentElement
        .children[2]
        .style
        .display = "inline"
    target
        .parentElement
        .children[1]
        .children[1]
        .children[0]
        .children[0]
        .innerHTML = 0;

}