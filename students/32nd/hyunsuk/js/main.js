const replyInput = document.querySelector("#reply-input");
const replyBtn = document.querySelector("#reply-button");
const form = document.querySelector("#reply-form");
const timeDiv = document.querySelector(".time-div");

const paintP = (value) => {
  const p = document.createElement("p");
  p.innerHTML = value;
  timeDiv.appendChild(p);
  replyInput.value = "";
};

const handleInput = (event) => {
  const value = replyInput.value;
  const code = event.code;
  if (value && code === "Enter") {
    paintP(value);
  }
};

const handleBtn = (event) => {
  event.preventDefault();
  const value = replyInput.value;
  if (value) {
    paintP(value);
  }
};

form.addEventListener("keyup", handleInput);
replyBtn.addEventListener("click", handleBtn);
