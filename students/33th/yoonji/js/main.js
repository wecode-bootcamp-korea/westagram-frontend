const replyContainer = document.querySelector(".reply");
const replyInput = document.querySelector(".reply__input__text");
const replyForm = document.querySelector(".reply__input");

function deleteReply(e) {
    const li = e.target.parentElement;
    li.remove();
}

function paintReply(newRe) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const b = document.createElement("b");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("btn__right");
    li.appendChild(b);
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteReply);
    b.innerText = "I.like.U ";
    span.innerText = newRe;
    replyContainer.appendChild(li);
    // nameId.classList.remove("hidden");
}

function replySubmit(e) {
    e.preventDefault();
    const newReply = replyInput.value;
    replyInput.value = "";
    paintReply(newReply);
}

replyForm.addEventListener("submit", replySubmit);