const replyContainer = document.querySelector(".reply");
const replyInput = document.querySelector(".reply__input__text");
const replyForm = document.querySelector(".reply__input");

function paintReply(newRe) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const strong = document.createElement("strong");
    li.appendChild(strong);
    li.appendChild(span);
    strong.innerText = "I.like.U ";
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