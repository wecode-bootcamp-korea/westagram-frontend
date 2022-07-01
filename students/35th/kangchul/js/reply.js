


// 창 바깥화면 클릭시 뒤로 가기 

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
    if( e.target.nodeName === "BODY") {
    window.history.back()
    }
})

// 댓글 입력

const replyForm = document.querySelector(".reply__form");
const replyInput = replyForm.querySelector("input")
const replyWindow = document.querySelector(".reply__window")

replyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = replyInput.value;
    replyInput.value = "";
    const replyList = document.createElement("li");
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
        <i class="fa-solid fa-xmark xmark"></i>
        `;
    replyList.setAttribute("class", "reply__list");
    replyWindow.prepend(replyList);
})

// 하트 아이콘 클릭 - 하트 색깔 , 좋아요개수

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
        
        //삭제버튼

    } else if (e.target.classList.contains("xmark")) {
        target.parentElement.remove();
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


