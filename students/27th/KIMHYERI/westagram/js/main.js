'use strict';

const commentInput = document.querySelector(".button2");
const postBtn = document.querySelector(".button3");
const thisIsTextarea = document.querySelector(".please");
const parentForm = document.querySelector(".reply");
// const deleteButton = document.querySelector(".delete-button");

// 하트구현
function fillHeart(element) {
    element.classList.toggle("fas");
}
// 게시 버튼 구현
function btnColor() {
    if (!commentInput.value.length) {
        postBtn.style.color = "#B8E2FD";
    } else if (commentInput.value.length) {
        postBtn.style.color = "#0095F6";

    }
}
//댓글 삭제 구현


function uploadComment() {
    const commentValue = commentInput.value; //input의 value가 배열 값으로
    const createDiv = document.createElement("div");
    const createSpan0 = document.createElement("span");
    const createSpan1 = document.createElement("span");
    const createSpan2 = document.createElement("span");
    const createImg0 = document.createElement('i');
    // const createImg1 = document.createElement('i');
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');



    if (commentValue !== "") {
        createDiv.className = "text-0";
        createSpan1.className = "text1";
        createSpan2.className = "text2";
        createSpan1.innerHTML = "kimel_khr";
        createSpan2.innerHTML = commentValue;
        createImg0.className = "far fa-heart";
        createSpan0.className = "textGrop";
        // createDeleteBtns.className = "DeleteBatons";
        createImg0.onclick = () => fillHeart(createImg0);

        parentForm.appendChild(createDiv);
        createDiv.appendChild(createSpan0);
        createSpan0.appendChild(createSpan1);
        createSpan0.appendChild(createSpan2);
        createDiv.appendChild(deleteBtn);
        createDiv.appendChild(createImg0);
        // createImg0.appendChild(createImg1);
        deleteBtn.textContent =  "X";
        thisIsTextarea.value = "";
        commentInput.value = "";


        function deleteContent() {
            console.log(createDiv);
            createDiv.remove();
            // createSpan0.removeChild(createSpan1);
            // createSpan0.removeChild(createSpan2);
            // deleteButton.removeChild(deleteBtn);
            // createDiv.removeChild(createImg0);
        }
        deleteBtn.addEventListener('click',deleteContent);

    }

}

function clicke() {
    postBtn.disabled = false;
    postBtn.style.color = "#B8E2FD";

}

function enterCode(e) {
    if (e.keyCode === 13) {
        uploadComment();
        commentInput.value = "";
    }
}

function pressBtn() {
    postBtn.addEventListener("click", uploadComment);
    commentInput.addEventListener("keydown", enterCode);
}

pressBtn();

const init = () => {
    commentInput.addEventListener('keyup', btnColor);
    postBtn.addEventListener('click', clicke);

};

init();