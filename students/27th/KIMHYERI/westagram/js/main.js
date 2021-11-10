'use strict';

const innerForm = document.querySelector(".button1");
const commentInput = document.querySelector(".button2");
const postBtn = document.querySelector(".button3");
const thisIsTextarea = document.querySelector(".please");
const parentForm = document.querySelector(".please");

function uploadComment() {
    const commentValue = commentInput.value;
    const createTag = document.createElement("div");
    const createTag1 = document.createElement("span");
    const createTag2 = document.createElement("span");

    if (commentValue !== "") {
        createTag.className += "newDiv";
        createTag1.className += "name";
        createTag2.className += "newComment";
        createTag1.innerHTML = "kimel_khr";
        createTag2.innerHTML = commentValue;

        parentForm.appendChild(createTag);
        createTag.appendChild(createTag1);
        createTag.appendChild(createTag2);
        thisIsTextarea.value = "";

    }

    createTag.addEventListener("click", function(e) {
        createTag.remove();
    });
}

function enterCode(e) {
    if (e.keyCode === 13) {
        uploadComment();
    }
}

function pressBtn() {
    postBtn.addEventListener("click", uploadComment);
    commentInput.addEventListener("keydown", enterCode);
}

pressBtn();