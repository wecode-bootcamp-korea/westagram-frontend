"use strict";

const newInput = document.querySelector(".inputText");
const clickBtn = document.querySelector(".inputBtn");
const form = document.querySelector(".addReply")

function moreReply() {
  let replySpace = document.querySelector(".feedReply");
  let inputText = newInput.value;
  let newLi = document.createElement('li');
  let newSpan1 = document.createElement('span');
  let newSpan2 = document.createElement('span');
  let newSpan3 = document.createElement('span');
  let newI = document.createElement('i');

  newLi.classList.add('friendsReply');
  newSpan1.innerHTML = "doyboy03";
  newSpan2.innerHTML = inputText;
  newSpan3.classList.add('trashCan');
  newI.setAttribute("class", "fas fa-trash-alt");

  replySpace.appendChild(newLi);
  newLi.appendChild(newSpan1);
  newLi.appendChild(newSpan2);
  newLi.appendChild(newSpan3);
  newSpan3.appendChild(newI);

  newSpan3.addEventListener("click", () => {
    replySpace.removeChild(newLi);
  })

  newInput.value = "";
}

clickBtn.addEventListener("mousedown", moreReply);

function moreReply2() {
  if (event.keyCode == 13) {
    let replySpace = document.querySelector(".feedReply");
    let inputText = newInput.value;
    let newLi = document.createElement('li');
    let newSpan1 = document.createElement('span');
    let newSpan2 = document.createElement('span');
    let newSpan3 = document.createElement('span');
    let newI = document.createElement('i');

    newLi.classList.add('friendsReply');
    newSpan1.innerHTML = "doyboy03";
    newSpan2.innerHTML = inputText;
    newSpan3.classList.add('trashCan');
    newI.setAttribute("class", "fas fa-trash-alt");
    replySpace.appendChild(newLi);
    newLi.appendChild(newSpan1);₩
    newLi.appendChild(newSpan2);
    newLi.appendChild(newSpan3);
    newSpan3.appendChild(newI);

    newSpan3.addEventListener("click", () => {
      replySpace.removeChild(newLi);
    })

    newInput.value = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

newInput.addEventListener("keydown", moreReply2);