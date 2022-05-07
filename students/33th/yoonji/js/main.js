const replyContainer = document.querySelector(".reply");
const replyInput = document.querySelector(".reply__input__text");
const replyForm = document.querySelector(".reply__input");

function paintReply(newRe) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = `<strong>I.like.U </strong>${newRe}`;
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