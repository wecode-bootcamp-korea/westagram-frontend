const comment = document.getElementById("comment");
const commentInput = document.getElementById("commentInput");
const ul = document.querySelector(".comment-lists");
const heart = document.querySelector(".heart");
const deleteBtn = document.querySelector(".delete");
const commentBtn = document.getElementById("commentBtn");
const myProfile = document.getElementById("myProfile");
const myProfileBubble = document.getElementById("myProfileBubble");
const searchInput = document.getElementById("search");
const searchBubble = document.getElementById("searchBubble");
const bubble = document.createElement("div");

const idArray = [
  "greenMon",
  "cco_cco",
  "queoqa",
  "eeeeeasy",
  "drink_lover",
  "huhuhu",
];

const idObject = {
  greenMon: "img/1.png",
  cco_cco: "img/2.png",
  queoqa: "img/3.png",
  eeeeeasy: "img/4.png",
  drink_lover: "img/5.png",
  huhuhu: "img/6.png",
};

function addComment(input) {
  const li = document.createElement("li");
  const span_bold = document.createElement("span");
  span_bold.setAttribute("class", "bold");
  span_bold.innerText = "mia_seo";
  const span = document.createElement("span");
  span.setAttribute("class", "space");
  span.innerText = input;
  const img = document.createElement("img");
  img.setAttribute("class", "heart");
  img.setAttribute("src", "img/heart.png");
  const span_gray = document.createElement("span");
  span_gray.setAttribute("class", "gray");
  span_gray.innerText = "90분전";
  const span_delete = document.createElement("span");
  span_delete.setAttribute("class", "delete gray");
  span_delete.innerText = "삭제";

  li.appendChild(span_bold);
  li.appendChild(span);
  li.appendChild(img);
  li.appendChild(span_gray);
  li.appendChild(span_delete);
  ul.appendChild(li);

  img.addEventListener("click", onClickHeart);
  span_delete.addEventListener("click", onClickDelete);
}

function onSubmitInput(event) {
  event.preventDefault();
  addComment(commentInput.value);
  commentInput.value = "";
}

let isRed = false;

function onClickHeart(event) {
  if (isRed === false) {
    event.target.src = "img/heart-fill.png";
    isRed = true;
  } else {
    event.target.src = "img/heart.png";
    isRed = false;
  }
}

function onClickDelete(event) {
  const li = event.target.parentElement;
  li.remove();
}

function onKeyUpInput() {
  commentInput.value !== ""
    ? (commentBtn.style.color = "#2099f1")
    : (commentBtn.style.color = "#c5e1fb");
}

let isClicked = false;

function onClickProfile() {
  if (isClicked === false) {
    myProfileBubble.classList.remove("hide");
    isClicked = true;
  } else {
    myProfileBubble.classList.add("hide");
    isClicked = false;
  }
}

function makeSearch(key) {
  const bubble_inside = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");

  bubble.setAttribute("class", "bubble");
  bubble_inside.setAttribute("class", "bubble-inside");
  img.setAttribute("src", idObject[key]);
  img.setAttribute("class", "profile-photo active");

  p.innerText = key;

  bubble_inside.appendChild(img);
  bubble_inside.appendChild(p);
  bubble.appendChild(bubble_inside);
  searchBubble.appendChild(bubble);
  deleteBubble(searchBubble);
}

function checkArray() {
  if (searchInput !== "")
    for (let i = 0; i < idArray.length; i++) {
      if (idArray[i].startsWith(searchInput.value)) {
        makeSearch(idArray[i]);
      }
    }
}

comment.addEventListener("submit", onSubmitInput);
commentInput.addEventListener("keyup", onKeyUpInput);
heart.addEventListener("click", onClickHeart);
deleteBtn.addEventListener("click", onClickDelete);
myProfile.addEventListener("click", onClickProfile);
searchInput.addEventListener("keyup", checkArray);
